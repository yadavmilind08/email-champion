import { useEffect, useState } from "react";
import axios from "axios";

import { AuthContent } from "../../components/AuthContent";
import { getAllUsers } from "../../util/auth";
import { LoadingOverlay } from "../../components/LoadingOverlay";

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // async function getUsers() {
    //   const response = await getAllUsers();
    //   console.log(response.status);
    // }
    // getUsers();
    axios
      .get("http://localhost/users")
      .then((res) => console.log("res", res.data))
      .catch((err) => console.log(err));
  }, []);

  async function signinHandler({ firstName, lastName, email, password }) {
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    setIsAuthenticating(true);
    const response = await createUser(payload);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
};
