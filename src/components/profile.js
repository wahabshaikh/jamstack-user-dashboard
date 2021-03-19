import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

export default function Profile({ showModal }) {
  const identity = useIdentityContext();
  const isLoggedIn = identity?.isLoggedIn;
  const name = identity?.user?.user_metadata?.full_name;

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See Your Base
          </Link>
        </nav>
        <span>
          Logged in as {name}. <button onClick={showModal}>Logout</button>
        </span>
      </div>
    )
  );
}
