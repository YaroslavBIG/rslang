export const parseLocation = () => {
  return document.location.hash.slice(1).toLowerCase() || '/';
}
