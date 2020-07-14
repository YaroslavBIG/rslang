export const returnObj = (rightCount, allRight) => {
  const obj = {
    total: allRight,
    right: rightCount,
    wrong: allRight - rightCount,
  };
  return obj;
};
