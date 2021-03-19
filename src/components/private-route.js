import React from "react";
import { navigate } from "gatsby-link";
import { useIdentityContext } from "react-netlify-identity-widget";

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  const identity = useIdentityContext();
  const isLoggedIn = identity?.isLoggedIn;

  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null;
  }

  return <Component {...rest} />;
}
