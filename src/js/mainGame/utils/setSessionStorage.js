export const setSessionStorage = (obj) => {
  Object.entries(obj).map((arr) => sessionStorage.setItem(arr[0], arr[1]));
};
