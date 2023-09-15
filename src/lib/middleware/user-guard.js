/* Define static user roles by ID from backend */
export const ADMIN = 'admin';
export const MANAGER = 'manager';
export const ACCOUNTING = 'accounting';
export const USER = 'user';

export const USER_PERMISSIONS = {
  activities: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  admin: {
    view: [ADMIN]
  },
  categories: {
    view: [ADMIN, MANAGER, ACCOUNTING],
    create: [ADMIN, MANAGER, ACCOUNTING],
    update: [ADMIN, MANAGER, ACCOUNTING],
    delete: [ADMIN, MANAGER, ACCOUNTING],
  },
  deals: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  events: {
    view: [ADMIN],
    // create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  manager: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  products: {
    view: [ADMIN, ACCOUNTING],
    create: [ACCOUNTING],
    update: [ACCOUNTING],
    delete: [ADMIN, ACCOUNTING],
  },
  purchases: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  vineyards: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  },
  wineries: {
    view: [ADMIN],
    create: [ADMIN],
    update: [ADMIN],
    delete: [ADMIN],
  }
};
