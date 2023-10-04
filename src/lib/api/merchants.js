import instance from '@/lib/api';

export const getAllMerchants = async () => {
  try {
    const response = await instance.get(`/api/users?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const getMerchantById = async (id) => {
  try {
    const response = await instance.get(`/api/users/${id}?populate=*`);
    return response;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
