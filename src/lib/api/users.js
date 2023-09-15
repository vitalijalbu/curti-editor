import instance from '../api';

/* Get all Users */
export const getAllUsers = async (params) => {
  try {
   /* const options = {
      params: {
        fields: '*',
        filters:{
          'first_name': {
            '$containsi' : params?.query
          }
        }
      }
    };*/
    const response = await instance.get('/api/users?populate=*');
    return response;
  } catch (error) {
    return {error};
  }
};


export const getUserOverview = async () => {
  try {
    const response = await instance.get(`/api/users/${id}?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get User details */
export const getUserById = async (id) => {
  try {
    const response = await instance.get(`/api/users/${id}?populate=*`);
    return response;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const createUser = async (body) => {
  try {
    const response = await instance.post(`/api/users?populate=*`, body);
    console.log("Response create", response);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const updateUser = async (id,body) => {
  try {
    const response = await instance.put(`/api/users/${id}`, body);
    return response.data;
  } catch (error) {
    return {status: false, error: error};
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await instance.delete(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

//=============================================================================
// User roles
//=============================================================================

/* Get all Users */
export const getAllUserRoles = async () => {
  try {
    const response = await instance.get('/api/users-permissions/roles?populate=*');
    return response;
  } catch (error) {
    return {error};
  }
};
