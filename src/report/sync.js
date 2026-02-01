/**
 * Sync service - handles syncing reports to backend
 */

import { getPendingReports, updateReportStatus } from './db';
import { updatePendingBadge } from './form';

// Backend API endpoint (replace with your actual backend)
const API_ENDPOINT = '/api/reports';

// Sync status
let isSyncing = false;
let isOnline = navigator.onLine;

/**
 * Initialize sync service
 */
export const initSync = () => {
  // Listen for online/offline events
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Listen for messages from service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SYNC_REPORTS') {
        console.log('Received sync message from service worker');
        syncPendingReports();
      }
    });
  }

  // Update initial status
  updateConnectionStatus(navigator.onLine);

  // Register for background sync if supported
  registerBackgroundSync();

  // Try initial sync if online
  if (navigator.onLine) {
    syncPendingReports();
  }

  console.log('Sync service initialized');
};

/**
 * Handle coming online
 */
const handleOnline = () => {
  console.log('Connection restored');
  isOnline = true;
  updateConnectionStatus(true);
  syncPendingReports();
};

/**
 * Handle going offline
 */
const handleOffline = () => {
  console.log('Connection lost');
  isOnline = false;
  updateConnectionStatus(false);
};

/**
 * Update connection status indicator
 */
const updateConnectionStatus = (online) => {
  const indicator = document.getElementById('syncStatusIndicator');
  if (indicator) {
    if (online) {
      indicator.classList.remove('offline');
      indicator.classList.add('online');
      indicator.title = 'Συνδεδεμένο';
    } else {
      indicator.classList.remove('online');
      indicator.classList.add('offline');
      indicator.title = 'Εκτός σύνδεσης';
    }
  }
};

/**
 * Register for background sync
 */
const registerBackgroundSync = async () => {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.sync.register('sync-reports');
      console.log('Background sync registered');
    } catch (error) {
      console.log('Background sync not supported:', error);
    }
  }
};

/**
 * Sync all pending reports to backend
 */
export const syncPendingReports = async () => {
  if (isSyncing || !navigator.onLine) {
    return;
  }

  isSyncing = true;
  updateSyncingStatus(true);

  try {
    const pendingReports = await getPendingReports();

    if (pendingReports.length === 0) {
      console.log('No pending reports to sync');
      isSyncing = false;
      updateSyncingStatus(false);
      return;
    }

    console.log(`Syncing ${pendingReports.length} reports...`);

    for (const report of pendingReports) {
      try {
        await syncReport(report);
        await updateReportStatus(report.id, 'synced');
        console.log(`Report ${report.id} synced`);
      } catch (error) {
        console.error(`Failed to sync report ${report.id}:`, error);
        await updateReportStatus(report.id, 'failed');
      }
    }

    await updatePendingBadge();
    showSyncNotification(pendingReports.length);
  } catch (error) {
    console.error('Sync failed:', error);
  } finally {
    isSyncing = false;
    updateSyncingStatus(false);
  }
};

/**
 * Sync a single report to backend
 */
const syncReport = async (report) => {
  // Prepare report data for upload
  const formData = new FormData();
  formData.append('category', report.category);
  formData.append('severity', report.severity);
  formData.append('description', report.description || '');
  formData.append('latitude', report.location?.lat || 0);
  formData.append('longitude', report.location?.lng || 0);
  formData.append('accuracy', report.location?.accuracy || 0);
  formData.append('timestamp', report.timestamp);

  // Convert base64 photo to blob if exists
  if (report.photo) {
    const photoBlob = await base64ToBlob(report.photo);
    formData.append('photo', photoBlob, `report-${report.id}.jpg`);
  }

  // Send to backend
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};

/**
 * Convert base64 to blob
 */
const base64ToBlob = async (base64) => {
  const response = await fetch(base64);
  return response.blob();
};

/**
 * Update syncing status indicator
 */
const updateSyncingStatus = (syncing) => {
  const indicator = document.getElementById('syncStatusIndicator');
  if (indicator) {
    if (syncing) {
      indicator.classList.add('syncing');
    } else {
      indicator.classList.remove('syncing');
    }
  }
};

/**
 * Show sync notification
 */
const showSyncNotification = (count) => {
  // Create toast notification
  const toast = document.createElement('div');
  toast.className = 'sync-toast';
  toast.innerHTML = `
    <span class="sync-toast-icon">✓</span>
    <span>${count} αναφορ${count === 1 ? 'ά' : 'ές'} συγχρονίστηκ${count === 1 ? 'ε' : 'αν'}</span>
  `;

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

/**
 * Create sync status indicator
 */
export const createSyncIndicator = () => {
  const indicator = document.createElement('div');
  indicator.id = 'syncStatusIndicator';
  indicator.className = 'sync-status-indicator';
  indicator.innerHTML = `
    <span class="sync-icon">●</span>
    <span class="sync-spinner"></span>
  `;
  indicator.title = navigator.onLine ? 'Συνδεδεμένο' : 'Εκτός σύνδεσης';

  if (navigator.onLine) {
    indicator.classList.add('online');
  } else {
    indicator.classList.add('offline');
  }

  document.body.appendChild(indicator);

  return indicator;
};
