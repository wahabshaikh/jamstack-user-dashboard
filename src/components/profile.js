import { Link } from "gatsby";
import React from "react";

export default function Profile() {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret Stuff
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          See Your Base
        </Link>
      </nav>
      <span>TODO: show login status</span>
    </div>
  );
}
