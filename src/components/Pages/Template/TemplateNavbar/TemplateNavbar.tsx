import React from "react";

import { Navbar } from "react-bootstrap";

import { cx } from "emotion";
import Styles from "./TemplateNavbarStyles";

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
            </Navbar>
        )
    }

}