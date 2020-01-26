import React, { Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import StudentForm from "./home/body/registration_form/Form";
import CustomizedTables from "./home/body/table/Table";

const Home = () => {
  return (
    <Router>
      <Fragment>
        <div className="body">
          <Switch>
            <Route exact path="/dashboard" component={CustomizedTables} />
            <Route exact path="/registration" component={StudentForm} />
            <Redirect exact from="" to="/dashboard" />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default Home;
