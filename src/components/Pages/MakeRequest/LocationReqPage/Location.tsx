import React from "react";

import { cx } from "emotion";
import Styles from "./LocationStyles";
import Template from "../../Template/Template";
import { Form, Button } from "react-bootstrap";
import AuthCard from "../../../Widgets/AuthCard/AuthCard";
import { ArrowRight } from "react-feather";
import GoogleMapsReact from 'google-map-react';

type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
};
type State = {};

export default class Location extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
        <div id="locationPage" hidden={ this.props.currentPageIndex != 2 }>
            <h1 className="page-header">Choose your location!</h1>
            <br/>
            <AuthCard>
                <div className="ml-auto mr-auto" style={{ display: "table", width: "100%", maxWidth: "600px", minHeight: "60vh" }}>
                    <Form className="ml-auto mr-auto">
                        <div style={{ height:"350px", width:"100%" }}>
                            <GoogleMapsReact
                                bootstrapURLKeys={{ key:"AIzaSyBZVlIJthRpJ0XyJdBJ-XuJGkJgE5INT-g" }}
                                defaultCenter={{lat:53, lng:-1}}
                                defaultZoom={5}
                            >
                            </GoogleMapsReact>
                        </div>
                        <Button href="/" size="lg" className="ml-auto mr-auto" style={{ display: "table", width:"40%" }} variant="success">
                            Confirm Request&nbsp;<ArrowRight/>
                        </Button>
                    </Form>
                </div>
            </AuthCard>
        </div>
        )
    }

}

