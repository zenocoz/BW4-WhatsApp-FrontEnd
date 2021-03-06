import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatBoard from "../../_Pages/ChatBoard/ChatBoard";

//PERSONAL COMPONENTS IMPORTS
import LoginPage from "../../_Pages/0.LoginPage/LoginPage";
import ProfileEdit from "../../_Pages/1.MainPage/Sub_Components/SideBar/Sub_Components/3.Profile/Profile";
import MainPage from "../../_Pages/1.MainPage/MainPage";

//STYLE IMPORTS
import "./RouterWeb.scss";

export default function RouterWeb() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/chatboard" exact component={ChatBoard} /> */}

        <Route path="/" exact render={(props) => <LoginPage {...props} />} />
        <Route
          path="/main-page"
          exact
          render={(props) => <MainPage {...props} />}
        />
      </Switch>
    </Router>
  );
}
