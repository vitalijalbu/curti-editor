import instance from '../api';

/* Get all Contacts */
export const getAllContacts = async (params) => {
  try {
    
    const response = await instance.get('/api/contacts?populate=*');
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Contact details */
export const getContactById = async (id) => {
  try {
    const response = await instance.get(`/api/contacts/${id}?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

//Create Contact
export const createContact = async (body) => {
  try {
    const response = await instance.post(`/api/contacts?populate=*`, body);
    console.log("Response create", response);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

//Update Contact
export const updateContact = async (id, body) => {
  try {
    const response = await instance.put(`/api/contacts/${id}`,  body);
    console.log("Response update", response);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

//Delete Contact
export const deleteContact = async (id) => {
  try {
    const response = await instance.delete(`/api/contacts/${id}`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};