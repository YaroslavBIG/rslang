export const findComponentByPath = (path, routes) => {
  return routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || {};
}
