/**
 * IndexedDB storage for offline reports
 */

const DB_NAME = 'common-ground-reports';
const DB_VERSION = 1;
const STORE_NAME = 'reports';

let db = null;

/**
 * Open the database
 */
export const openDB = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });

        store.createIndex('status', 'status', { unique: false });
        store.createIndex('timestamp', 'timestamp', { unique: false });
        store.createIndex('category', 'category', { unique: false });
      }
    };
  });
};

/**
 * Save a report to IndexedDB
 */
export const saveReport = async (report) => {
  const database = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const reportWithMeta = {
      ...report,
      timestamp: Date.now(),
      status: 'pending', // pending, synced, failed
    };

    const request = store.add(reportWithMeta);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Get all reports
 */
export const getAllReports = async () => {
  const database = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Get pending reports (not yet synced)
 */
export const getPendingReports = async () => {
  const database = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('status');
    const request = index.getAll('pending');

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

/**
 * Update report status
 */
export const updateReportStatus = async (id, status) => {
  const database = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const getRequest = store.get(id);

    getRequest.onsuccess = () => {
      const report = getRequest.result;
      if (report) {
        report.status = status;
        const updateRequest = store.put(report);
        updateRequest.onsuccess = () => resolve(report);
        updateRequest.onerror = () => reject(updateRequest.error);
      } else {
        reject(new Error('Report not found'));
      }
    };

    getRequest.onerror = () => reject(getRequest.error);
  });
};

/**
 * Get count of pending reports
 */
export const getPendingCount = async () => {
  const pending = await getPendingReports();
  return pending.length;
};
