const { load } = require("./js/main");


window.addEventListener('hashchange', router);
window.onload = () => load();
