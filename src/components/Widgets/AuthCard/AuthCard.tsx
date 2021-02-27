import React from "react";

import { Card } from "react-bootstrap";

import { cx } from "emotion";
import Styles from "./AuthCardStyles";

type Props = {};
type State = {};

export default class AuthCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.authCardStyles )}>
                {this.props.children}
            </div>
        )
    }

}