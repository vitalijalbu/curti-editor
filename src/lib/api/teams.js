import instance from '@/lib/api';

export const getAllTeams = async () => {
  try {
    const response = await instance.get(`/api/teams?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
/* Get Team details */
export const getTeamById = async (id) => {
  try {
    const response = await instance.get(`/api/teams/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createTeam = async () => {
  try {
    const response = await instance.delete(`/api/teams?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
export const updateTeam = async () => {
  try {
    const response = await instance.delete(`/api/teams?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteTeam = async () => {
  try {
    const response = await instance.delete(`/api/teams?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
