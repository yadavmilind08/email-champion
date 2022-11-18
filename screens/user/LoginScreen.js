import { useState, useContext, useEffect } from "react";
import { Alert } from "react-native";

import { AuthContent } from "../../components/AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { getAllUsers } from "../../util/auth";

export const LoginScreen = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    async function fetchAllUsers() {
      setIsAuthenticating(true);
      try {
        const response = await getAllUsers();
        authCtx.saveUsers(response.data);
        setIsAuthenticating(false);
      } catch (err) {
        setIsAuthenticating(false);
        console.log("LoginScreen getAllUsers error", err);
      }
    }

    // fetchAllUsers();
  }, []);

  async function signinHandler({ email, password }) {
    const users = authCtx.users;
    const user = users.find(
      (x) => x.email === email && x.password === password
    );
    if (user) {
      authCtx.authenticate(email);
      authCtx.saveUser(user);
    } else {
      Alert.alert("Login Failed!");
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loading..." />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
};
