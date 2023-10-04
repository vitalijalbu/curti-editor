import instance from '@/lib/api';

export const getAllBrands = async () => {
  try {
    const response = await instance.get(`/api/brands?populate=*&pagination[limit]=1000`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
/* Get Brand details */
export const getBrandById = async (id) => {
  try {
    const response = await instance.get(`/api/brands/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getFeaturedBrands = async () => {
  try {
    const response = await instance.get(`/api/brands?pagination[limit]=12`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
