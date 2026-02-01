/**
 * Report form modal
 */

import { categories, severityLevels } from './categories';
import { saveReport, getPendingCount } from './db';

let modal = null;
let currentPhoto = null;
let currentLocation = null;

/**
 * Get current GPS location
 */
const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => reject(error),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
};

/**
 * Create the modal HTML
 */
const createModalHTML = () => {
  const categoryOptions = categories
    .map(
      (cat) => `
      <label class="report-category-option">
        <input type="radio" name="category" value="${cat.id}" />
        <span class="report-category-label">
          <img src="icons/${cat.icon}.svg" alt="" class="report-category-icon" />
          ${cat.name}
        </span>
      </label>
    `
    )
    .join('');

  const severityOptions = severityLevels
    .map(
      (level) => `
      <label class="report-severity-option">
        <input type="radio" name="severity" value="${level.id}" />
        <span class="report-severity-label" style="--severity-color: ${level.color}">
          ${level.name}
        </span>
      </label>
    `
    )
    .join('');

  return `
    <div class="report-modal-overlay" id="reportModalOverlay">
      <div class="report-modal">
        <div class="report-modal-header">
          <h2>Αναφορά Προβλήματος</h2>
          <button class="report-modal-close" id="reportModalClose">&times;</button>
        </div>

        <form id="reportForm" class="report-form">
          <!-- Photo Section -->
          <div class="report-section">
            <label class="report-label">Φωτογραφία</label>
            <div class="report-photo-container">
              <img alt="" id="reportPhotoPreview" class="report-photo-preview" style="display: none;" />
              <div id="reportPhotoPlaceholder" class="report-photo-placeholder">
                <span>📷</span>
                <span>Πατήστε για φωτογραφία</span>
              </div>
              <input type="file" id="reportPhotoInput" accept="image/*" capture="environment" />
            </div>
          </div>

          <!-- Location Section -->
          <div class="report-section">
            <label class="report-label">Τοποθεσία</label>
            <div class="report-location" id="reportLocation">
              <span class="report-location-loading">📍 Λήψη τοποθεσίας...</span>
            </div>
          </div>

          <!-- Category Section -->
          <div class="report-section">
            <label class="report-label">Κατηγορία *</label>
            <div class="report-categories">
              ${categoryOptions}
            </div>
          </div>

          <!-- Severity Section -->
          <div class="report-section">
            <label class="report-label">Σοβαρότητα</label>
            <div class="report-severity">
              ${severityOptions}
            </div>
          </div>

          <!-- Description Section -->
          <div class="report-section">
            <label class="report-label">Περιγραφή (προαιρετικό)</label>
            <textarea
              id="reportDescription"
              class="report-textarea"
              placeholder="Περιγράψτε το πρόβλημα..."
              rows="3"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="report-actions">
            <button type="button" class="report-btn report-btn-cancel" id="reportCancel">
              Ακύρωση
            </button>
            <button type="submit" class="report-btn report-btn-submit" id="reportSubmit">
              Υποβολή
            </button>
          </div>
        </form>

        <!-- Success Message -->
        <div id="reportSuccess" class="report-success" style="display: none;">
          <span class="report-success-icon">✓</span>
          <h3>Η αναφορά αποθηκεύτηκε!</h3>
          <p>Θα συγχρονιστεί όταν υπάρχει σύνδεση.</p>
          <button class="report-btn report-btn-submit" id="reportSuccessClose">
            Κλείσιμο
          </button>
        </div>
      </div>
    </div>
  `;
};

/**
 * Initialize the modal
 */
export const initReportForm = (map) => {
  // Add modal to DOM
  const modalContainer = document.createElement('div');
  modalContainer.innerHTML = createModalHTML();
  document.body.appendChild(modalContainer);

  modal = document.getElementById('reportModalOverlay');
  const form = document.getElementById('reportForm');
  const photoInput = document.getElementById('reportPhotoInput');
  const photoPreview = document.getElementById('reportPhotoPreview');
  const photoPlaceholder = document.getElementById('reportPhotoPlaceholder');
  const locationDiv = document.getElementById('reportLocation');
  const successDiv = document.getElementById('reportSuccess');

  // Close handlers
  document.getElementById('reportModalClose').addEventListener('click', closeModal);
  document.getElementById('reportCancel').addEventListener('click', closeModal);
  document.getElementById('reportSuccessClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Photo handler
  photoPlaceholder.addEventListener('click', () => photoInput.click());
  photoPreview.addEventListener('click', () => photoInput.click());

  photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      currentPhoto = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.src = e.target.result;
        photoPreview.style.display = 'block';
        photoPlaceholder.style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const category = form.querySelector('input[name="category"]:checked');
    if (!category) {
      alert('Παρακαλώ επιλέξτε κατηγορία');
      return;
    }

    const severity = form.querySelector('input[name="severity"]:checked');
    const description = document.getElementById('reportDescription').value;

    // Convert photo to base64 for storage
    let photoData = null;
    if (currentPhoto) {
      photoData = await fileToBase64(currentPhoto);
    }

    const report = {
      category: category.value,
      severity: severity ? severity.value : 'medium',
      description: description,
      photo: photoData,
      location: currentLocation,
    };

    try {
      await saveReport(report);
      form.style.display = 'none';
      successDiv.style.display = 'flex';
      updatePendingBadge();
    } catch (error) {
      console.error('Error saving report:', error);
      alert('Σφάλμα κατά την αποθήκευση');
    }
  });
};

/**
 * Convert file to base64
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Open the report modal
 */
export const openModal = async (map) => {
  if (!modal) return;

  // Reset form
  const form = document.getElementById('reportForm');
  const successDiv = document.getElementById('reportSuccess');
  const photoPreview = document.getElementById('reportPhotoPreview');
  const photoPlaceholder = document.getElementById('reportPhotoPlaceholder');
  const locationDiv = document.getElementById('reportLocation');

  form.reset();
  form.style.display = 'block';
  successDiv.style.display = 'none';
  photoPreview.style.display = 'none';
  photoPlaceholder.style.display = 'flex';
  currentPhoto = null;
  currentLocation = null;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Get location
  locationDiv.innerHTML = '<span class="report-location-loading">📍 Λήψη τοποθεσίας...</span>';

  try {
    currentLocation = await getCurrentLocation();
    locationDiv.innerHTML = `
      <span class="report-location-success">
        📍 ${currentLocation.lat.toFixed(5)}, ${currentLocation.lng.toFixed(5)}
        <small>(±${Math.round(currentLocation.accuracy)}m)</small>
      </span>
    `;
  } catch (error) {
    // Fallback to map center
    const center = map.getCenter();
    currentLocation = { lat: center.lat, lng: center.lng, accuracy: null };
    locationDiv.innerHTML = `
      <span class="report-location-fallback">
        📍 Κέντρο χάρτη: ${center.lat.toFixed(5)}, ${center.lng.toFixed(5)}
        <small>(χειροκίνητη επιλογή)</small>
      </span>
    `;
  }
};

/**
 * Close the modal
 */
export const closeModal = () => {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/**
 * Update pending reports badge
 */
export const updatePendingBadge = async () => {
  const count = await getPendingCount();
  const badge = document.getElementById('reportPendingBadge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
};

/**
 * Create the floating report button
 */
export const createReportButton = (map) => {
  const button = document.createElement('button');
  button.id = 'reportButton';
  button.className = 'report-fab';
  button.innerHTML = `
    <span class="report-fab-icon">📢</span>
    <span class="report-fab-text">Αναφορά</span>
    <span class="report-pending-badge" id="reportPendingBadge" style="display: none;">0</span>
  `;

  button.addEventListener('click', () => openModal(map));

  document.body.appendChild(button);

  // Update badge on load
  updatePendingBadge();

  return button;
};
