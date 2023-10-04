import instance from '@/lib/api';

export const findAction = (params) => {
  if(!params?.query?.length) {
    return instance.get(`/api/purchases?populate=*&sort=createdAt:desc`);
  }else{
    return instance.get(`/api/purchases?populate=*&sort=createdAt:desc&filters[$or][0][user][email][$containsi]=${params?.query}&filters[$or][1][id][$containsi]=${params?.query}&filters[$or][2][transaction_id][$containsi]=${params?.query}`);
  }
};

export const findOneAction = (id) => {
  return instance.get(`/api/purchases/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/purchases', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/purchases/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/purchases/${id}`);
};