export const safeGetItem = <T>(key: string): T => JSON.parse(localStorage.getItem(key) || '{}');
