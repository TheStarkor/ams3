import React from "react";
import { Divider } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';

import * as ROUTES from "../../constants/routes"

const App = () => (
    <Router>
        <Navigation/>

        <Divider>WELCOME TO ICISTS 2019</Divider>

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    </Router>
)

export default App;