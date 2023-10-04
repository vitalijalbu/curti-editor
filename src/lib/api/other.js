import instance from '@/lib/api';

// Get listing types
export const getAllTypes = async () => {
  try {
    const response = await instance.get('/api/listing-types');
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};

// Get listing cadastral
export const getAllStatuses = async () => {
  try {
    const response = await instance.get( "/api/listing-statuses");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing cadastral
export const getAllViews = async () => {
  try {
    const response = await instance.get( "/api/listing-views");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing cadastral
export const getAllEnergy = async () => {
  try {
    const response = await instance.get( "/api/listing-energy-ratings");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};


// Get listing cadastral
export const getAllHeatings = async () => {
  try {
    const response = await instance.get( "/api/listing-heatings");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing cadastral
export const getAllVarieties = async () => {
  try {
    const response = await instance.get( "/api/listing-varieties");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};


// Get listing conditions
export const getAllConditions = async () => {
  try {
    const response = await instance.get("/api/listing-conditions" );
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing exhibitions
export const getAllExhibitions = async () => {
  try {
    const response = await instance.get( "/api/listing-exhibitions");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing exhibitions
export const getAllAmenities = async () => {
  try {
    const response = await instance.get("/api/amenities");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing cadastral
export const getAllCadastralCategories = async () => {
  try {
    const response = await instance.get( "/api/listing-cadastral-categories");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};

// Get listing cadastral
export const getAllSalesType = async () => {
  try {
    const response = await instance.get( "/api/listing-sales");
    return response.data;
  } catch (error) {
    return { status: false, error: error };
  }
};
