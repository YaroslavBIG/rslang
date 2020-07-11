export const collectionDatasheets = (dataArr, newObj, firstCase, secondCase) => {
  dataArr.forEach((el) => {
    const elKeysArr = Object.keys(el);
    elKeysArr.forEach((elemKey) => {
      switch (elemKey) {
        case firstCase:
          newObj[elemKey].push(el[elemKey]);
          break;
        case secondCase:
          newObj[elemKey].push(el[elemKey]);
          break;
        default:
          break;
      }
    });
  });
};
