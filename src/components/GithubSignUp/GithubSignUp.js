import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GithubSignUp = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
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
        onClick={() => signInWithGithub()}
      >
        Continue With Github
      </Button>
    </div>
  );
};

export default GithubSignUp;
