import instance from '@/lib/api';
import { getSession } from '@/lib/api';
const session = getSession();
const user = session?.user;



export const getFavoritedItems = async () => {
  //const id = session.id;
  try {
    const response = await instance.get(`/api/favorites?filters[is_search]=false&filters[user][id]=${user?.id}&populate=*`);
    return response.data;
  } catch (error) {
    return {status: false, error: error}
  }
};


export const getFavoritedSearches = async () => {
  const id = session.id;
  try {
    const response = await instance.get(`/api/favorites?filters[is_search]=true&filters[user][id]=${id}&pagination[limit]=4`);
    return { status: true, data: response.data };
  } catch (error) {
    return { status: false, error: error };
  }
};

export const getListingById = async (id) => {
  try {
    const response = await instance.get(`/api/listings/${id}?populate=*`);
    return { status: true, data: response.data };
  } catch (error) {
    return { status: false, error: error };
  }
};


//Delete Listing
export const addToFavorite = async (body) => {
  try {
      const response = await instance.post(`/favorites/`, body);
      return {status: true};
  } catch (error) {
      return {status: false, error: error};
  }
};
