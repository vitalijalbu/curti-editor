import instance from '../api';

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
    const response = await instance.get(`/api/teams/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createTeam = async (body) => {
  try {
    const response = await instance.post(`/api/teams?populate=*`, body);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
export const updateTeam = async (id, body) => {
  try {
    const response = await instance.put(`/api/teams/${id}?populate=*`, body);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteTeam = async (id) => {
  try {
    const response = await instance.delete(`/api/teams/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
