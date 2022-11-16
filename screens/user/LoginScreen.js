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
      try {
        const response = await getAllUsers();
        authCtx.saveUsers(response.data);
      } catch (err) {
        Alert.alert("LoginScreen getAllUsers error", err);
      }
    }

    fetchAllUsers();
  }, []);

  async function signinHandler({ email, password }) {
    setIsAuthenticating(true);
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
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signinHandler} />;
};
