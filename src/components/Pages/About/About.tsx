import React from "react";

import { cx } from "emotion";
import Styles from "./AboutStyles";
import Template from "../Template/Template";

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        fetch("http://localhost:3001/register", {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({
                name: "test",
                email: "test@gmail.com",
                password: "password"
            })
        })
        .then(data => {
            console.log(data);
        });
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