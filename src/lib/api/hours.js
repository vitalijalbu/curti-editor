import instance from '../api';

export const getAllHours = async () => {
  try {
    const response = await instance.get(`/api/hours?populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};
/* Get Hour details */
export const getTimesheetByUserId = async (dates) => {
  try {
    const response = await instance.get(`/api/timesheet?user_id=1&from=${dates.from}&to=${dates.to}`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

/* Get Hour details */
export const getHoursByUserId = async (id) => {
  try {
    const response = await instance.get(`/api/hours`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

export const createHour = async (body) => {
  try {
    const response = await instance.post(`/api/hours`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};
export const updateHour = async (id, body) => {
  console.log(body)
  try {
    const response = await instance.put(`/api/hours/${id}`, body);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};

export const deleteHour = async (id) => {
  try {
    const response = await instance.delete(`/api/hours/${id}`);
    return response.data;
  } catch (error) {
     return {status: false, error: error}
  }
};
