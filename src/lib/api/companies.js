import instance from '../api';



export const getAllCompanies = async (body) => {
  try {
    // const options = {
    //   params: {
    //     filters:{
    //       'title': {
    //         '$containsi' : params?.query
    //       }
    //     }
    //   }
    // };

    
    const response = await instance.get('/api/companies?populate=*', body);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const getAllCompanyTypes = async () => {
  try {
    const response = await instance.get('/api/company-types?populate=*');
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};


/* Get Company details */
export const getCompanyById = async (id) => {
  try {
    const response = await instance.get(`/api/companies/${id}?populate=*`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//Create Company
export const createCompany = async (body) => {
  try {
    const response = await instance.post(`/api/companies?populate=*`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//Update Company
export const updateCompany = async (id, body) => {
  try {
    const response = await instance.put(`/api/companies/${id}`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

//DeleteCompany
export const deleteCompany = async (id) => {
  try {
    const response = await instance.delete(`/api/companies/${id}`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};
