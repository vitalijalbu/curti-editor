import instance from '../api';

export const getAllProjects = async () => {
  try {
    const response = await instance.get(`/api/projects?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

export const getUserProjects = async () => {
  try {
    const response = await instance.get(`/api/projects?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Project details */
export const getProjectById = async (id) => {
  try {
    const response = await instance.get(`/api/projects/${id}?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Project details */
export const getProjectDashboard = async (id) => {
  try {
    const response = await instance.get(`/api/projects/${id}/dashboard`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Project details */
export const getFavoriteProjects = async () => {
  try {
    const response = await instance.get(`/api/favorites?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};


/* Create Project */
export const createProject = async (data) => {
  try {
    const response = await instance.post(`/api/projects?populate=*`, data);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Update Project */
export const updateProject = async (id, body) => {
  try {
    const response = await instance.put(`/api/projects/${id}`, body);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Delete Project */
export const archiveProject = async (id) => {
  try {
    const response = await instance.post(`/api/projects/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Delete Project */
export const deleteProject = async (id) => {
  try {
    const response = await instance.delete(`/api/projects/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
