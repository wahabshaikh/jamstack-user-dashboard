import React, { useEffect, useState } from "react";
import { IdentityModal } from "react-netlify-identity-widget";
import { navigate } from "gatsby-link";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/private-route";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";

import "react-netlify-identity-widget/styles.css";

export default function Dashboard({ location }) {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, [location.pathname]);

  const showModal = () => setVisibility(true);

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  );
}
