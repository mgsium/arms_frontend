import React from "react";

import { cx } from "emotion";
import Styles from "./MakeRequestStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class MakeRequest extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">Make a Request</h1>
            </Template>
        )
    }

}