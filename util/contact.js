import axios from "axios";

export async function getAllContacts() {
  const response = await axios.get("http://localhost:3000/contacts");
  return response;
}

export async function createContact(newContact) {
  const response = await axios.post(
    "http://localhost:3000/contacts",
    newContact
  );
  return response;
}

export async function editContact(newContact) {
  const response = await axios.put(
    `http://localhost:3000/contacts/${newContact.id}`,
    newContact
  );
  return response;
}

export async function deleteContact(newContact) {
  const response = await axios.delete(
    `http://localhost:3000/contacts/${newContact.id}`
  );
  return response;
}
