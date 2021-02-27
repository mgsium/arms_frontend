import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../Widgets/FeatureCard/FeatureCard";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                {/*Explore*/}
                <h1 className="page-header">Home</h1>
                <hr/>
                <Container fluid>
                    <Row>
                        <Col md={3} sm={6}>
                            <FeatureCard header="Explore">
                                Learn and Lend in the Armstrong community.
                            </FeatureCard>
                        </Col>
                        <Col md={3} sm={6}>
                            <FeatureCard header="Explore">
                                Learn and Lend in the Armstrong community.
                            </FeatureCard>
                        </Col>
                        <Col md={3} sm={6}>
                            <FeatureCard header="Explore">
                                Learn and Lend in the Armstrong community.
                            </FeatureCard>
                        </Col>
                        <Col md={3} sm={6}>
                            <FeatureCard header="Explore">
                                Learn and Lend in the Armstrong community.
                            </FeatureCard>
                        </Col>
                    </Row>
                </Container>
                <br/><br/>
                {/*Exploration Section*/}
                <h1 className="page-header">Explore</h1>
                <hr/>
            </Template>
        )
    }

}