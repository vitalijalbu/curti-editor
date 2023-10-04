import instance from '@/lib/api';

export const getSpotlightItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getMostViewedItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*&pagination[limit]=12`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getAllMerchantItems = async (id) => {
  try {
    const response = await instance.get(`/api/items?populate=*&filters[merchant][id]=${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getFeaturedItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*&pagination[limit]=12`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const getRelatedItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*&pagination[limit]=12`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const searchItem = async (params) => {
      try {
        const response = await instance.get(`/api/items?sort=createdAt:desc&filters[title][$containsi]=${params?.query}&populate=photos,category&pagination[limit]=12`);
        return response.data;
      } catch (error) {
        throw new Error(`Failed to get data from API: ${error.message}`);
      }
};


/* Get Item details */
export const getItemById = async (id) => {
  try {
    const response = await instance.get(`/api/items/${id}?populate=*`);
    return response.data;
    // return response;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createItem = async () => {
  try {
    const response = await instance.delete(`/api/items?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
