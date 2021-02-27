import React from "react";

import { cx } from "emotion";
import Styles from "./AboutStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">About</h1>
                <hr/>
            </Template>
        )
    }

}