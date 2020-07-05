/**
 * Записывает переданные свойства объекта в storage
 *
 * @param {object} obj Объект вида { name: 'param', name2: 'param2'}
 * @param {string} storage Принимает значения 'session' или 'local'
 * @example
 * const obj = {
 *   wordNum: '1',
 *   id: '3468465165484',
 * };
 * setStorageFromObject(obj, 'local')
 * ----
 * localStorage.wordNum // "1"
 * localStorage.id // "3468465165484"
 */

export const setStorageFromObject = (obj, storage = 'session') => {
  const stor = storage === 'session' ? sessionStorage : localStorage;

  const enter = (object) => {
    Object.entries(object).map((arr) => {
      if (typeof arr[1] !== 'object') return stor.setItem(arr[0], arr[1]);
      return enter(arr[1]);
    });
  };
  return enter(obj);
};
