import axios from "axios";

export const baseURL = "http://4.198.76.225";
export const config = {
  headers: { Authorization: "Token cbaa1989a4ac3cac25309557cb3f1dc9da4e64c8" },
};

export const getStateList = async () => {
  return axios.get(`${baseURL}/state/`);
};

export const saveProperty = async (data: Object) => {
  return await axios.post(`${baseURL}/property/`, data);
};

export const getProperties = async () => {
  return await axios.get(`${baseURL}/property/`, config);
};
