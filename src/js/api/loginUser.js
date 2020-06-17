import getResponse from "./getResponse";
import saveUser from "../utils/saveUser";

const loginUser = async (user, globalUser) => {
  const parse = JSON.stringify(user);
  const content = await getResponse('signin', 'POST', {body: parse});
  globalUser.token = content.token;
  globalUser.userId = content.userId;
  saveUser();
};

export default loginUser;
