import instance from '../api';
import { message } from 'antd';
/* Get all Customers */
export const getAllCustomers = async (params) => {
  try {
    // const options = {
    //   params: {
    //     fields: '*',
    //     filters:{
    //       'title': {
    //         '$containsi' : params?.query
    //       }
    //     }
    //   }
    // };
    // if (Object.keys(params).length === 0) {
    //   delete options.params;
    // }
    
    const response = await instance.get('/api/customers?populate=*');
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Customer details */
export const getCustomerById = async (id) => {
  try {
    const response = await instance.get(`/api/customers/${id}?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

//Create Customer
export const createCustomer = async (body) => {
  try {
    const response = await instance.post(`/api/customers?populate=*`, body);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const updateCustomer = async (id, body) => {
  try {
    const response = await instance.put(`/api/customers/${id}`, body);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await instance.delete(`/api/customers/${id}`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};
