export const KEY = 'banter.user';

export const isLoggedIn = () => { return !!localStorage.getItem(KEY); };

export const saveUserToLocalStorage = (user) => { return localStorage.setItem(KEY, JSON.stringify(user)); };

export const getUserFromLocalStorage = () => {
  try {
    const localStorageString = localStorage.getItem(KEY);
    const user = JSON.parse(localStorageString);
    return user || {};
  } catch (e) {
    return {};
  }
};

export const clearUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    console.error(e);
  }
};
