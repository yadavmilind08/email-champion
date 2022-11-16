import axios from "axios";

export async function getAllContacts() {
  const response = await axios.get("http://localhost:3000/contacts");
  return response;
}
