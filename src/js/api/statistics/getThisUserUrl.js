import { globalUser } from '../../utils';

export const getThisUserUrl = () => {
  const thisUserId = globalUser.get().userId;
  return `users/${thisUserId}/statistics`;
};
