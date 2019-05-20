import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from "../Navbar";
import Home from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import Dashboard from '../Dashboard';
import AccountPage from '../Account';
import ApplicationPage from "../Application";
import Footer from '../Footer'
import ICISTSEvent from '../Event'

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session"

const App = () => (
        <HashRouter>
            <div>
                <div className="container-fluid pl-0 pr-0">
                <Navbar />
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                    <Route path={ROUTES.APPLICATION} component={ApplicationPage} />
                    <Route path={ROUTES.DASHBOARD} component={Dashboard} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                    <Route path={ROUTES.EVENT} component={ICISTSEvent} />
                </Switch>
                <Footer />
                </div>
            </div>
        </HashRouter>
)

export default withAuthentication(App);