import instance from "../api";

export const uploadAction = (formData) => {
    return instance.post(`/api/upload`, formData,
    {headers: {
        'Content-Type': 'multipart/form-data',
    }});
};
