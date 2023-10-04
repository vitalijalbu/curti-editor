import instance from '@/lib/api';

export const findAction = async () => {
  try {
    const response = await instance.get(`items/favorites?populate=project.title,project.id,id`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};