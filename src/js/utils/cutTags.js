function cutTags(str) {
  const tags = /( |<([^>]+)>)/ig;
  const dots = /(\.)/g;
  const result = str.replace(tags, '').replace(dots, '');

  return result;
}

export default cutTags;
