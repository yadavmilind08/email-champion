import { useState } from "react";
import { AuthContent } from "../../components/AuthContent";
import { createUser } from "../../util/auth";
import { LoadingOverlay } from "../../components/LoadingOverlay";

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ firstName, lastName, email, password }) {
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
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
};
