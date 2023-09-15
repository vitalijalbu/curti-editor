import instance from '../api';

export const findAction = async () => {
  try {
    const response = await instance.get(`api/favorites?populate=project.title,project.id,id`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};