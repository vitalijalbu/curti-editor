import instance from '@/lib/api';
import { getSession } from '@/lib/api';
const session = getSession();
const user = session?.user;

export const getProfileSummary = async () => {
  try {
    const response = await instance.get(`/api/summary?user_id=${id}`);
    return response;
  } catch (error) {
    return {status: false, error: error}
  }
};
