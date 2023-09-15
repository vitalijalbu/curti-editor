import instance from '../api';

export const getAllInbox = async () => {
  try {
    const response = await instance.get(`/api/notifications?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};
