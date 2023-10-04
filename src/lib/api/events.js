import instance from '@/lib/api';

export const findAction = (params) => {
  if(!params?.query?.length) {
    return instance.get(`/api/events?populate=*&sort=createdAt:desc`);
  }else{
    return instance.get(`/api/events?populate=*&sort=createdAt:desc&filters[$or][0][title][$containsi]=${params?.query}&filters[$or][1][company][title][$containsi]=${params?.query}`);
  }
};

export const findOneAction = (id) => {
  return instance.get(`/api/events/${id}?populate=*`);
};

export const createAction = (body) => {
  return instance.post('/api/events', body);
};

export const updateAction = (id, body) => {
  return instance.put(`/api/events/${id}`, body);
};

export const deleteAction = (id) => {
  return instance.delete(`/api/events/${id}`);
};