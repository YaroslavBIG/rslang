export const dropdown = (name, ...childs) => `<div class="dropdown nav__item">
  <span class="dropbtn">${name}</span>
  <div class="dropdown-content">
  ${[...childs].join('')}
  </div>
</div>`;
