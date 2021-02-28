import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Styles from "./AppStyles";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import LoadingPage from "./components/Pages/LoadingPage/LoadingPage";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import ContractDisplayPage from './components/Pages/ContractDisplayPage/ContractDisplayPage';
import MakeReq from './components/Pages/MakeReq/MakeReq';

type State = {};
type Props = {};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* Paths */}
                    <Route path="/"                     component={ Home }                  exact/>
                    <Route path="/about"                component={ About }                 exact/>
                    <Route path="/login"                component={ Login }                 exact/>
                    <Route path="/register"             component={ Register }              exact/>
                    <Route path="/contractDisplay"      component={ ContractDisplayPage }   exact/>
                    <Route path="/makeReq"              component={ MakeReq }               exact/>
                    {/* <Route path="/new-req"      component={  }          exact/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}