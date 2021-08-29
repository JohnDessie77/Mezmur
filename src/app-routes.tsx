import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.less";
import "./app.scss";
import Home from "./app/features/home/home";
import Layout from "./app/layout/layout";
import "./styles/index.scss";

const AuthenticatedRoute = ({ component, ...rest }: any) => {
  return <Route {...rest} render={() => <Layout>{component}</Layout>}></Route>;
};

function AppRoutes() {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Switch>
          <AuthenticatedRoute path="/" component={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRoutes;
