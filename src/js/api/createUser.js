import getResponse from "./getResponse";

const createUser = async (user, globalUser) => {
  const parse = JSON.stringify(user);
  const content = await getResponse('users', {method: 'POST', body: parse});
  globalUser.id = content.id;
  console.log(globalUser);
  saveUser();
};

export default createUser;
