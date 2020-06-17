const { globalUser } = require("../main");

const saveUser = () => {
  const json = JSON.stringify(globalUser);
  console.log(json)
  localStorage.setItem('user', json);
};

export default saveUser;
