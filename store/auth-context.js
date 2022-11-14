import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userList = [
  {
    id: 1,
    first_name: "Sebastian",
    last_name: "Eschweiler",
    email: "sebastian@gmail.com",
    password: "sebastian@gmail.com",
  },
  {
    id: 2,
    first_name: "Steve",
    last_name: "Palmer",
    email: "steve@gmail.com",
    password: "steve@gmail.com",
  },
  {
    id: 2,
    first_name: "Milind",
    last_name: "Yadav",
    email: "milind@gmail.com",
    password: "milind123",
  },
];

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  users: [],
  getAllUsers: () => {},
  createUser: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [users, setUsers] = useState(userList);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        setAuthToken(storedToken);
      }
    }

    fetchToken();
  }, []);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);

    setTimeout(() => {
      logout();
    }, 1 * 60 * 60 * 1000);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  function getAllUsers() {
    return users;
  }

  function createUser(firstName, lastName, email, password) {
    const newUser = {
      id: users.length + 1,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    setUsers([...users, newUser]);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    users: users,
    getAllUsers: getAllUsers,
    createUser: createUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
