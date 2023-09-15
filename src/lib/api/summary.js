import instance from '../api';


export const getGlobalSummary = async (id) => {
  try {
    const response = await instance.get(`/api/summary?user_id=1`);
    return response;
  } catch (error) {
    return {status: false, error: error}
  }
};
