import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { cx } from "emotion";
import Styles from "./TemplateNavbarStyles";
import NavBtn from "./NavBtn";

type Props = {};
type State = {};

export default class TemplateNavbar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Navbar variant="dark" className={cx( Styles.templateNavbarStyles )}>
                <Navbar.Brand>
                    <img src="../../../public/assets/img/svg/ArmstrongLogo.svg" height={30} width={30}/>
                    &nbsp;
                    Armstrong
                </Navbar.Brand>
                <Link to="/">
                    <NavBtn>Home</NavBtn>
                </Link>
                <Link to="/about">
                    <NavBtn>About</NavBtn>
                </Link>
                <Link to="/makeReq">
                    <NavBtn>Make a Request</NavBtn>
                </Link>
                <Link to="/make-ofr">
                    <NavBtn>Make an Offer</NavBtn>
                </Link>

                <div className="ml-auto" style={{ display: "inline-block" }}>
                    <Link to="/login">
                        <NavBtn>Login</NavBtn>
                    </Link>
                    <Link to="/register">
                        <NavBtn>Sign Up</NavBtn>
                    </Link>
                </div>
            </Navbar>
        )
    }

}