import instance from '@/lib/api';
import { getSession } from '@/lib/api';
const session = getSession();
const user = session?.user;

export const getAllUserItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*&filters[merchant][id]=${user?.id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getMostViewedItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*limit=8`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getFeaturedItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*&pagination[limit]=8`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
/* Get Item details */
export const getItemById = async (id) => {
  try {
    const response = await instance.get(`/api/items/${id}`);
    return response.data;
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
export const updateItem = async () => {
  try {
    const response = await instance.delete(`/api/items?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await instance.delete(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
