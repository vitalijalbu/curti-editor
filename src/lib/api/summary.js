import instance from '@/lib/api';


export const getGlobalSummary = async (id) => {
  try {
    const response = await instance.get(`/api/summary?user_id=1`);
    return response;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
