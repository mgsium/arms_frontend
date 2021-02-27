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
                    Armstrong
                </Navbar.Brand>
                <Link to="/">
                    <NavBtn>Home</NavBtn>
                </Link>
                <Link to="/about">
                    <NavBtn>About</NavBtn>
                </Link>

                <Link className="ml-auto" to="/login">
                    <NavBtn>Login</NavBtn>
                </Link>
            </Navbar>
        )
    }

}