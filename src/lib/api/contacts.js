import instance from '@/lib/api';

export const getAllContacts = async () => {
  try {
    const response = await instance.get(`/api/contacts?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
/* Get Contact details */
export const getContactById = async (id) => {
  try {
    const response = await instance.get(`/api/contacts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createContact = async () => {
  try {
    const response = await instance.delete(`/api/contacts?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
export const updateContact = async () => {
  try {
    const response = await instance.delete(`/api/contacts?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteContact = async () => {
  try {
    const response = await instance.delete(`/api/contacts?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
