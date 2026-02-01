/**
 * Report module - allows users to report environmental issues
 */

import './report.css';
import { initReportForm, createReportButton, updatePendingBadge } from './form';
import { openDB, getAllReports, getPendingReports } from './db';
import { initSync, createSyncIndicator, syncPendingReports } from './sync';

/**
 * Initialize the report system
 */
export const initReportSystem = async (map) => {
  // Initialize database
  await openDB();

  // Initialize form
  initReportForm(map);

  // Create floating button
  createReportButton(map);

  // Create sync indicator
  createSyncIndicator();

  // Initialize sync service
  initSync();

  // Update badge
  await updatePendingBadge();

  console.log('Report system initialized');
};

export { getAllReports, getPendingReports, syncPendingReports };
