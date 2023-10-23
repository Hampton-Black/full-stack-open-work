import axios from "axios";
import { IPerson } from "./../components/Persons";

const baseUrl = "http://localhost:3001/api/persons";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject: IPerson) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id: number, newObject: IPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const deletePerson = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default {
  getAll,
  create,
  update,
  deletePerson,
};
