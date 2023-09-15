import instance from '../api';


  
export const getAllTaskSections = async () => {
  try {
    const response = await instance.get(`/api/section-tasks?populate=*.,project.id,project.title,tasks.*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const getUserTasks = async () => {
  try {
    const response = await instance.get(`/api/tasks?populate=*&pagination[pageSize]=5`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

/* Get Task details */
export const getTaskById = async (id) => {
  try {
    const response = await instance.get(`/api/tasks/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const createTask = async () => {
  try {
    const response = await instance.delete(`/api/tasks?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const updateTask = async () => {
  try {
    const response = await instance.delete(`/api/tasks?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

export const deleteTask = async () => {
  try {
    const response = await instance.delete(`/api/tasks?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const getAllLabelsTask = async () => {
  try {
    const response = await instance.get(`/api/labels?fields=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


export const getAllPriority = async () => {
  try {
    const response = await instance.get(`/api/labels?fields=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};
