import React from "react";

import { cx } from "emotion";
import Styles from "./MakeOfferStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class MakeOffer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <h1 className="page-header">Make an Offer</h1>
            </Template>
        )
    }

}