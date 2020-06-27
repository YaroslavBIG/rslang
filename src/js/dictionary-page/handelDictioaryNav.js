import { renderWordsData } from './renderWordsData';

export const handelDictionaryNav = (e) => {
  e.preventDefault();
  const learningBtn = e.target.closest('.nav-dictionary__link_learning');
  const hardBtn = e.target.closest('.nav-dictionary__link_hard');
  const deletedBtn = e.target.closest('.nav-dictionary__link_deleted');

  if (learningBtn) {
    renderWordsData('all');
  }

  if (hardBtn) {
    renderWordsData('hard');
  }

  if (deletedBtn) {
    renderWordsData('delete');
  }
};
