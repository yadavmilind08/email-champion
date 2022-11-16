import axios from "axios";

export async function createUser(firstName, lastName, email, password) {
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };
  const response = await axios.post("http://localhost:3000/users", newUser);
  return response;
}

export async function getAllUsers() {
  const response = await axios.get("http://localhost:3000/users");
  return response;
}
