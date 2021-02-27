import React from "react";

import { Navbar } from "react-bootstrap";

import { cx } from "emotion";
import Styles from "./TemplateFooterStyles";
import { Heart } from "react-feather";

type Props = {};
type State = {};

export default class TemplateFooter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Navbar className={cx( Styles.templateFooterStyles )} fixed="bottom" variant="light">
                <Navbar.Brand className="ml-auto mr-auto">
                    Made with <Heart style={{ fill: "#fc3d21", stroke: "none" }} size={13}/> at AngelHacks 2.0!
                </Navbar.Brand>
            </Navbar>
        )
    }

}