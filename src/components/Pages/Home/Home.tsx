import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../Widgets/FeatureCard/FeatureCard";
import MentorRequestCard from "../../Widgets/MentorRequestCard/MentorRequestCard";
import { Link } from "react-router-dom";

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
                        <Col xl={3} lg={6}>
                            <a href="#explore">
                                <FeatureCard header="Explore">
                                    Learn and Lend in the Armstrong community.
                                </FeatureCard>
                            </a>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link to="/register">
                                <FeatureCard header="Join" imageUrl="https://images.unsplash.com/photo-1461532257246-777de18cd58b">
                                    Become a part of the Armstrong community.
                                </FeatureCard>
                            </Link>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link to="/make-req">
                                <FeatureCard header="Make a Request" imageUrl="https://images.unsplash.com/photo-1527792492728-08d07d011113">
                                    Seek help from skilled mentors.
                                </FeatureCard>
                            </Link>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link to="/make-ofr">
                                <FeatureCard header="Make an Offer" imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a">
                                    Offer help to those in need.
                                </FeatureCard>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br/><br/>
                {/*Exploration Section*/}
                <h1 id="explore" className="page-header">Explore</h1>
                <hr/>
                <div style={{ padding: 20 }}>
                    <MentorRequestCard/>
                    <MentorRequestCard/>
                    <MentorRequestCard/>
                    <MentorRequestCard/>
                </div>
            </Template>
        )
    }

}