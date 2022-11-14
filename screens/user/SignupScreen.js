import { useState, useContext } from "react";
import { AuthContent } from "../../components/AuthContent";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";

export const SignupScreen = () => {
  const authCtx = useContext(AuthContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ firstName, lastName, email, password }) {
    setIsAuthenticating(true);
    authCtx.createUser(firstName, lastName, email, password);
    authCtx.authenticate(email);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
};
