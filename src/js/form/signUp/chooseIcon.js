const icon = { iconURL: 'none' };

const chooseIcon = () => {
  const arrIcons = document.querySelectorAll('.icons__item');
  arrIcons.forEach((elem) => {
    elem.addEventListener('click', (ev) => {
      arrIcons.forEach((item) => item.classList.remove('icon_active'));
      elem.classList.add('icon_active');

      icon.iconURL = ev.target.alt;
    });
  });
};

export { icon, chooseIcon };
