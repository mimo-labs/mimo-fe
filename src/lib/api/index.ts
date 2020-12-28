import { SESSION_ENDPOINTS } from 'lib/api/session';
import { DASHBOARD_ENDPOINTS } from 'lib/api/dashboard';

export const ENDPOINTS = {
  session: { ...SESSION_ENDPOINTS },
  dashboard: { ...DASHBOARD_ENDPOINTS },
};
