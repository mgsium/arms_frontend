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
        const dummyRequest: MentorRequest = {
            id: "dummy-id",
            name: "Request for Comment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, ipsum ac ultrices congue, velit tellus tempor libero, eu rhoncus arcu est quis lacus. Curabitur tincidunt pretium sem, ac posuere libero varius eu. Pellentesque interdum massa sit amet justo imperdiet, et elementum nisi malesuada. Curabitur metus leo, euismod at nulla sed, scelerisque dictum mauris. Sed aliquam cursus scelerisque. Cras at neque ultrices, tincidunt risus in, venenatis eros. Fusce eu purus aliquet, tempor eros convallis, tristique neque. Vestibulum eget ligula porttitor, accumsan purus et, pretium tellus. Phasellus sagittis sodales commodo. Mauris id efficitur tellus, vel auctor libero.",
            location: {
                lat: 22.2,
                lng: 22.2
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
                    <MentorRequestCard request={dummyRequest}/>
                    <MentorRequestCard request={dummyRequest}/>
                    <MentorRequestCard request={dummyRequest}/>
                    <MentorRequestCard request={dummyRequest}/>
                </div>
            </Template>
        )
    }

}