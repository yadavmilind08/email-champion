import { useState, useContext } from "react";
import { Alert } from "react-native";
import { AuthContent } from "../../components/AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";
import { createUser } from "../../util/auth";

export const SignupScreen = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ firstName, lastName, email, password }) {
    const index = authCtx.users.findIndex((x) => x.email === email);
    if (index > -1) {
      Alert.alert("User already exists!");
    } else {
      authCtx.createUser(firstName, lastName, email, password);
      authCtx.authenticate(email);
      // createNewUser(firstName, lastName, email, password);
    }
  }

  async function createNewUser(firstName, lastName, email, password) {
    setIsAuthenticating(true);
    try {
      const response = await createUser(firstName, lastName, email, password);
      authCtx.addUser(response.data);
      authCtx.authenticate(email);
    } catch (err) {
      console.log("SignupScreen createUser error", err);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
};
