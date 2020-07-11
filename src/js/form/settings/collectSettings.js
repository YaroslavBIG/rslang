export const collectSettings = (object) => {
  Object.entries(object).map((arr) => {
    if (typeof arr[1] !== 'object') {
      const el = document.getElementById(arr[0]);
      if (el) {
        if (el.type === 'checkbox') {
          object[el.id] = el.checked;
        }
        if (el.type === 'number') {
          object[el.id] = el.value;
        }
      } else {
        object[arr[0]] = object[arr[1]];
      }
      return;
    }
    return collectSettings(arr[1]);
  });
};
