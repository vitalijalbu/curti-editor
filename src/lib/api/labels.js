import instance from '../api';

export const getAllHours = async () => {
    try {
      const response = await instance.get(`/api/api/labels?populate=*`);
      return response.data;
    } catch (error) {
      return {error: error}
    }
  };