import { apiRequest } from './apiRequest';
import { RequestTypes } from './reqestTypes';

export const getAllMessages = async (email) => {
  return await apiRequest(`messages/${email}`, RequestTypes.GET);
};
