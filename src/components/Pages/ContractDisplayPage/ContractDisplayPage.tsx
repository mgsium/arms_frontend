import React from "react";

import { cx } from "emotion";
import Styles from "./ContractDisplayPageStyles";
import Template from "../Template/Template";
import { Row, Col, Container, Button } from 'react-bootstrap';

import GoogleMapsReact from "google-map-react";
import { ZoomIn } from "react-feather";


type Props = {
    // contract: Offer | Request
};
type State = {};

export default class ContractDisplayPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <Container fluid>
                    <Row style={{ marginBottom:"5vh" }}>
                        <Col></Col>
                        <Col md="auto">
                            <Button variant="success" className={ cx(Styles.acceptButton) }>
                                Looking for: <span style={{ fontWeight:"bold" }}>a Mentor/a Student</span>
                            </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <div style={{ height:"350px", width:"100%" }}>
                                <GoogleMapsReact
                                    bootstrapURLKeys={{ key:"AIzaSyBZVlIJthRpJ0XyJdBJ-XuJGkJgE5INT-g" }}
                                    defaultCenter={{lat:53, lng:-1}}
                                    defaultZoom={5}
                                >
                                </GoogleMapsReact>
                            </div>
                            <br/>
                        
                            <Button variant="success" className={ cx(Styles.acceptButton) } style={{ width:"100%" }}>
                                Fulfill Contract
                            </Button>
                        </Col>
                        <Col>
                            <h2 style={{ fontFamily:"Quicksand, sans-serif", fontWeight:"bold", fontSize:"40px" }}>
                                [TITLE]
                            </h2>
                            <hr style={{ borderTop:"3px solid #bbb" }}/>
                            <p style={{ fontFamily:"Muli, sans-serif", fontSize:"30px" }}>
                                [DESCRIPTION]
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Template>
        )
    }

}