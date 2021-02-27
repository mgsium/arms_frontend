import React from "react";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import TemplateNavbar from "./TemplateNavbar/TemplateNavbar";

type Props = {};
type State = {};

export default class Template extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <TemplateNavbar/>
                {this.props.children}
            </>
        )
    }

}