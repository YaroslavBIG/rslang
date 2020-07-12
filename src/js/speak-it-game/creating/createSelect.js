export const createSelect = (count, id) => {
  let temp = '';

  for (let i = 0; i < count; i += 1) {
    const y = i + 1;
    temp += `<option data-select="${i}">${y}</option>`;
  }

  return `<select id="${id}"> ${temp} </select>`;
};
