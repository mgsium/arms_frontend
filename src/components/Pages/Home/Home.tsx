import React from "react";

import { cx } from "emotion";
import Styles from "./HomeStyles";
import Template from "../Template/Template";
import { Col, Container, Row } from "react-bootstrap";
import FeatureCard from "../../Widgets/FeatureCard/FeatureCard";
import MentorRequestCard from "../../Widgets/MentorRequestCard/MentorRequestCard";
import { Link } from "react-router-dom";
import MentorRequest from "../../../types/MentorRequest";
import GlobalStyles from "../../GlobalStyles";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const dummyRequest1: MentorRequest = {
            id: "dummy-id",
            name: "Long Division",
            description: "Mathematics mentor in London to help get me over my life long fear of Long Division",
            location: {
                lat: 51.5039148256577,
                lng: -0.1242160376895854
            },
            tags: []
        };
        const dummyRequest2: MentorRequest = {
            id: "dummy-id",
            name: "Undergraduate Biology",
            description: "I am struggling with the internals of the Human Biology",
            location: {
                lat: 52.5116381937997,
                lng: 13.434090084943454
            },
            tags: []
        };
        const dummyRequest3: MentorRequest = {
            id: "dummy-id",
            name: "help with Shakespearean Works",
            description: "We're going over Macbeth and I really have no clue what to do or have any original ideas",
            location: {
                lat: 40.737211650241754, 
                lng: -74.1439586891879
            },
            tags: []
        };
        const dummyRequest4: MentorRequest = {
            id: "dummy-id",
            name: "P = NP",
            description: "Our teacher gave us this for homework and I'm struggling a bit",
            location: {
                lat: 39.76234169646559, 
                lng: -86.25607408799662
            },
            tags: []
        };


        return (
            <Template>
                {/*Explore*/}
                <h1 className="page-header">Home</h1>
                <br/>
                <Container fluid>
                    <Row>
                        <Col xl={3} lg={6}>
                            <a className={cx( GlobalStyles.FLAT_LINK )} href="#explore">
                                <FeatureCard header="Explore">
                                    Learn and Lend in the Armstrong community.
                                </FeatureCard>
                            </a>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link className={cx( GlobalStyles.FLAT_LINK )} to="/register">
                                <FeatureCard header="Join" imageUrl="https://images.unsplash.com/photo-1461532257246-777de18cd58b">
                                    Become a part of the Armstrong community.
                                </FeatureCard>
                            </Link>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link className={cx( GlobalStyles.FLAT_LINK )} to="/make-req">
                                <FeatureCard header="Make a Request" imageUrl="https://images.unsplash.com/photo-1527792492728-08d07d011113">
                                    Seek help from skilled mentors.
                                </FeatureCard>
                            </Link>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Link className={cx( GlobalStyles.FLAT_LINK )} to="/make-ofr">
                                <FeatureCard header="Make an Offer" imageUrl="https://images.unsplash.com/photo-1544027993-37dbfe43562a">
                                    Offer help to those in need.
                                </FeatureCard>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br/><br/><br/>
                {/*Exploration Section*/}
                <h1 id="explore" className="page-header">Explore</h1>
                <br/>
                <div style={{ padding: 20 }}>
                    <MentorRequestCard request={dummyRequest1}/>
                    <MentorRequestCard request={dummyRequest2}/>
                    <MentorRequestCard request={dummyRequest3}/>
                    <MentorRequestCard request={dummyRequest4}/>
                </div>
            </Template>
        )
    }

}