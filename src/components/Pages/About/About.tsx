import React from "react";
import { cx } from "emotion";
import Template from "../Template/Template";
import { Col, Container, Row } from "react-bootstrap";
import MentorRequestCard from "../../Widgets/MentorRequestCard/MentorRequestCard";
import MentorRequestCardc from "../../Widgets/MentorRequestCardnumbertwo/MentorRequestCard";
import Styles from "./AboutStyles";

type Props = {};
type State = {};

export default class About extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Template>
                <div className={cx(Styles.wrap)}>
                    <div className={cx( Styles.divtest)}>
                        <p>About</p>
                    </div>
                </div>
                <br></br>
                <div className={cx(Styles.mentorReqCardStyles)}>
                    <h2>The Best way to Mentor....</h2>
                    <p>Here at Armstrong, we believe that one-to-one mentoring should be an option for students across the world.
                    At the same time, mentoring is an incredibly valuable service, and mentors should have something to show for the time and thought they put into teaching their specialist subjects.</p>

                </div>
                <div className={cx(Styles.mentorReqCardStyles)}>
                    <h2>What do Mentors get out of it?</h2>
                    <p>As a mentor, after fulfilling a student's request, they will leave you a rating + a review. As long as you continue mentoring to a high standard, as you fulfill these mentorship requests, you will build up a reputation of being a good mentor, giving you a no-stakes method to build your mentorship profile.
                    This profile can then be displayed in any other context as hard evidence of your proficiency in teaching this subject, allowing you to perhaps pursue paid positions teaching the subject of your specialty, with your employer ensured that you are a reliable teacher.</p>
                </div>
                <div className={cx(Styles.mentorReqCardStyles)}>
                    <h2>The Best way to Learn...</h2>
                    <p>Armstrong will make sure you get the best mentors to teach you. We believe that every student should have the opportunity to learn from the best people for an affordable price. Here, students are actively looking out for mentorship offerings to learn from, and mentors are actively looking out for mentorship requests to fulfill.</p>
                </div>
            </Template>
        )
    }

}