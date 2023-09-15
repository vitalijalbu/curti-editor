import instance from '../api';


export const getCompanyGroups = async (params) => {
  try {
    const response = await instance.get('/api/company-groups?populate=*');
    return response.data;
  } catch (error) {
    return message.open({
      type: 'error',
      content: "Errore",
    });
  }
};

/* Get Company details */
export const getCompanyById = async (id) => {
  try {
    const response = await instance.get(`/api/company-groups/${id}?populate=*`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//Create Company
export const createCompanyGroup = async (body) => {
  try {
    const response = await instance.post(`/api/company-groups?populate=*`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//Update Company
export const updateCompanyGroups = async (id, body) => {
  try {
    const response = await instance.put(`/api/company-groups/${id}`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//Delete Company
export const deleteCompanyGroup = async (id) => {
  try {
    const response = await instance.delete(`/api/company-groups/${id}`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};
