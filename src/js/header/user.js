const avatarPath = 'assets/img/noavatar.png';
export const user = () => {
  const singoutContent = 'Выход';
  return `<img class="header__avatar" src="${avatarPath}" alt="avatar">
    <button class="header__singout">
    ${singoutContent}
    </button>`;
};
