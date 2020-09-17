export const Authentication = {
  isAuthenticate: () => {
    const user = sessionStorage.getItem('user');
    return !!user;
  },
  setUser: (user) => {
    sessionStorage.setItem('user', user);
  },
  signout: () => {
    sessionStorage.clear();
  },
};
