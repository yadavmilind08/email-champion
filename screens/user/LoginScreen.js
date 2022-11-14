import { useState, useContext } from "react";
import { Alert } from "react-native";

import { AuthContent } from "../../components/AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";

export const LoginScreen = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signinHandler({ email, password }) {
    setIsAuthenticating(true);
    const users = authCtx.getAllUsers();
    const index = users.findIndex(
      (x) => x.email === email && x.password === password
    );
    if (index > -1) {
      authCtx.authenticate(email);
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
