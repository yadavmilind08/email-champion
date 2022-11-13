import axios from "axios";

const API_URL = "http://localhost:3000/";

export async function createUser(payload) {
  const response = await axios.post(`${API_URL}users`, payload);
  return response;
}

export async function getAllUsers() {
  const response = await axios.get("http://localhost/users");
  return response;
}
