import client from "./apollo";
import { verifyTokenQuery } from "../bundles/session/graphql";

export const verifyToken = () => {
  const token = localStorage.getItem("_token");

  if (!token) {
    window.location.href = "/";
  }

  return client.query({
    query: verifyTokenQuery,
    variables: { token }
  });
};

export const signIn = user => {
  localStorage.setItem("_token", user.token);
};

export const signOut = () => {
  localStorage.removeItem("_token");
  window.location.reload();
};
