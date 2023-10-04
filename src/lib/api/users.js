import instance from '@/lib/api';

export const getAllUsers = async () => {
  try {
    const response = await instance.get(`/api/users?populate=*`);
    return response;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getUserOverview = async () => {
  try {
    const response = await instance.get(`/api/users/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Get User details */
export const getUserById = async (id) => {
  try {
    const response = await instance.get(`/api/users/${id}`);
    return response;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createUser = async () => {
  try {
    const response = await instance.delete(`/api/users?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
export const updateUser = async () => {
  try {
    const response = await instance.delete(`/api/users?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteUser = async () => {
  try {
    const response = await instance.delete(`/api/users?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

