/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Auth: {
    Base: '/auth',
    Login: '/login',
    Logout: '/logout',
  },
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  User: {
    Base: '/user',
    Create: '/',
    Delete: '/'
  },
  Timezone: {
    Base: '/timezone',
    GetAll: '/',
  },
  Country: {
    Base: '/country',
    GetAll: '/',
  }
} as const;
