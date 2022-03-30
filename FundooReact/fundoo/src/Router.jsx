import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from 'react'
import Signup from "./Pages/SignUp/signup";
import Signin from "./Pages/signIn/signin";
import Dashboard from "./Pages/Dashboard/Dashboard";

function Router1() {
    return (
        <>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/dashboard" component={Dashboard} />                   
                 </Switch>
        </BrowserRouter>
        </>
    )
}

export default Router1;
