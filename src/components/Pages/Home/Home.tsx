import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">Home</h1>
                <hr/>
            </Template>
        )
    }

}