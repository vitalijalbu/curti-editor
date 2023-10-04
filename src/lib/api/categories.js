import instance from "@/lib/api";

export const getAllCategories = async () => {
  try {
    const response = await instance.get(
      "/api/categories?populate[0]=image&populate[1]=children")
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get featured Categories
export const getAllFeaturedCategories = async () => {
  try {
    const response = await instance.get(
      "/api/categories?populate[0]=image")
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};


export const getAllSports = async () => {
  try {
    const response = await instance.get(
      "/api/sports?populate[0]=image&populate[1]=children")
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};
