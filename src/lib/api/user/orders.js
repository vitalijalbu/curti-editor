import instance from '@/lib/api';
import { getSession } from '@/lib/api';
const session = getSession();
const user = session?.user;
// Get All Orders
export const getAllOrders = async () => {
  try {
    const response = await instance.get(`/api/orders?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

// Get order by ID
export const getOrderById = async (id) => {
  try {
    const response = await instance.get(`/api/orders/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

