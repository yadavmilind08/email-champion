import { createContext, useState } from "react";

const contactList = [
  {
    id: 1,
    userId: 1,
    first_name: "Shyam",
    last_name: "Singh",
    gender: "male",
    email: "shyam@gmail.com",
    address: "tokyo",
    phone: "2345678765",
    city: "japan",
  },
  {
    id: 2,
    userId: 2,
    first_name: "Ram",
    last_name: "Kumar",
    gender: "male",
    email: "ram@gmail.com",
    address: "23/2 Broadway, Paris, France",
    phone: "4567865436",
    city: "Paris",
  },
  {
    id: 3,
    userId: 1,
    first_name: "Ann",
    last_name: "Smith",
    gender: "male",
    email: "ann@gmail.com",
    address: "1310, 5th Avenue, 34th ST, New York City, USA",
    phone: "6764234523",
    city: "New York City",
  },
  {
    id: 4,
    userId: 1,
    first_name: "Cesar",
    last_name: "Godria",
    gender: "male",
    email: "cg@gmail.com",
    address: "Malasiya",
    phone: "4599909878",
    city: "Miri",
  },
  {
    id: 5,
    userId: 2,
    first_name: "Angelina",
    last_name: "Smith",
    gender: "female",
    email: "angelina@gmail.com",
    address: "indonesia",
    phone: "7645433456",
    city: "Jakarta",
  },
];

export const ContactContext = createContext({
  contacts: [],
  saveContacts: () => {},
  addContact: () => {},
  editContact: () => {},
  deleteContact: () => {},
});

function ContactContextProvider({ children }) {
  const [contacts, setContacts] = useState(contactList);

  function saveContacts(list) {
    setContacts(list);
  }

  function addContact(newContact) {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
  }

  function editContact(newContact) {
    const newContactList = [...contacts];
    const index = newContactList.findIndex((x) => x.id === newContact.id);
    newContactList[index] = newContact;
    setContacts([...newContactList]);
  }

  function deleteContact(newContact) {
    const newContactList = [...contacts];
    const index = newContactList.findIndex((x) => x.id === newContact.id);
    newContactList.splice(index, 1);
    setContacts([...newContactList]);
  }

  const value = {
    contacts: contacts,
    saveContacts: saveContacts,
    addContact: addContact,
    editContact: editContact,
    deleteContact: deleteContact,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export default ContactContextProvider;
