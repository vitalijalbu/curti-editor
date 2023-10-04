import instance from '@/lib/api';

export const getAllInbox = async () => {
  try {
    const response = await instance.get(`/api/notifications?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
