import React from "react";
import User from '../comp/user';
import Partner from '../comp/partners'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/users",
    exact: true,
    main: () => <User></User>
  },
  {
    path: "/partners",
    main: () => <Partner></Partner>
  }
];

function Routers() {
    return (
      <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>      
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
  
  export default Routers;
  