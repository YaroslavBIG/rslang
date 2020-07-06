export const renderSettings = (object) => {
  Object.entries(object).map((arr) => {
    if (typeof arr[1] !== 'object') {
      const el = document.getElementById(arr[0]);
      if (el) {
        if (el.type === 'checkbox') {
          [, el.checked] = arr;
        }
        if (el.type === 'number') {
          [, el.value] = arr;
        }
      }
      return;
    }
    return renderSettings(arr[1]);
  });
};
