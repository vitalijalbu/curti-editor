import instance from '@/lib/api';
import { getSession } from '@/lib/api';
const session = getSession();
const user = session?.user;

// Get All Reviews
export const getAllReviews = async () => {
  try {
    const response = await instance.get(`/api/reviews?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};


// Get All Merchant Reviews
export const getAllMerchantReviews = async (id) => {
  try {
    const response = await instance.get(`/api/reviews?populate=*&filters[user][id]=${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

// Get review by ID
export const getReviewById = async (id) => {
  try {
    const response = await instance.get(`/api/reviews/${id}?populate=*`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

// Get review by ID
export const createReview = async (values) => {
  const body = {...values};
  try {
    const response = await instance.post(`/api/reviews`, body);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get data from API: ${error.message}`);
  }
};

