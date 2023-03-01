import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const FacebookSignUp = () => {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p className="text-center">User Registered!</p>
      </div>
    );
  }
  return (
    <div>
      <Button
        type="submit"
        className="btn btn-defult w-100 mb-3"
        onClick={() => signInWithFacebook()}
      >
        Continue With Facebook
      </Button>
    </div>
  );
};

export default FacebookSignUp;
