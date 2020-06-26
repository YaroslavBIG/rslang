export const main = (...children) => {
  const bgMain = '<div class="main-bg"></div>';
  return `<main class="main">${bgMain + [...children].join('')}</main>`;
};
