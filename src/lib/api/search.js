import instance from '@/lib/api';

export const searchItems = async () => {
  try {
    const response = await instance.get(`/api/items?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Get Project details */
export const getProjectById = async (id) => {
  try {
    const response = await instance.get(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Get Project details */
export const getProjectDashboard = async (id) => {
  try {
    const response = await instance.get(`/api/projects/${id}/dashboard`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Get Project details */
export const getFavoriteProjects = async () => {
  try {
    const response = await instance.get(`/api/favorites`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


/* Create Project */
export const createProject = async (values) => {
  try {
    const response = await instance.post(`/api/projects`, values);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Update Project */
export const updateProject = async (id, values) => {
  try {
    const response = await instance.put(`/api/projects/${id}`, values);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Delete Project */
export const archiveProject = async (id) => {
  try {
    const response = await instance.post(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Delete Project */
export const deleteProject = async (id) => {
  try {
    const response = await instance.delete(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
