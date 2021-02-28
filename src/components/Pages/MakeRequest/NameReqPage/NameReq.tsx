import React from "react";

import { cx } from "emotion";
import Styles from "./NameReqStyles";
import Template from "../../Template/Template";
import { Form, Button } from "react-bootstrap";
import AuthCard from "../../../Widgets/AuthCard/AuthCard";

import { ArrowRight } from "react-feather";

type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
    confirmName: Function
};
type State = {
    name: string
};

export default class NameReq extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            name: ""
        }

        // Method Bindings
        this.updateName = this.updateName.bind(this)

    }

    updateName(e: any) {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
        <div id="nameReqPage" hidden={ this.props.currentPageIndex != 0 }>
            <h1 className="page-header">Looking for Mentorship?</h1>
            <br/>
            <AuthCard>
                <div className="ml-auto mr-auto" style={{ display: "table", width: "100%", maxWidth: "600px", minHeight: "60vh" }}>
                    <div style={{ height:"20vh" }}></div>
                    <Form className="ml-auto mr-auto">
                        <Form.Group>
                            <Form.Control
                                placeholder="What do you want to learn?"
                                id="name_field"
                                name="name"
                                type="text"
                                size="lg"
                                style={{ width:"60vw", fontSize:"40px", textAlign:"center" }}
                                onChange={this.updateName}
                                onFocus={this.updateName}
                            />
                        </Form.Group>
                        <Button size="lg" className="ml-auto mr-auto" style={{ display: "table", width:"40%" }} variant="success" onClick={() => { this.props.updatePageIndex(1); this.props.confirmName(this.state.name); }}>
                            Add a Description & Tags&nbsp;<ArrowRight/>
                        </Button>
                    </Form>
                </div>
            </AuthCard>
        </div>
        )
    }

}

