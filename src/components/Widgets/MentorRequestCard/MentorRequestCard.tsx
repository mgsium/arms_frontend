import React from "react";

import { cx } from "emotion";
import Styles from "./MentorRequestCardStyles";

type Props = {};
type State = {};

export default class MentorRequestCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.mentorReqCardStyles )}>
                <strong><p>Name: <a>Placeholder Text</a></p></strong>
                <div className={cx(Styles.mentorReqCardStyles)}></div>
                <p>Subject: <a>Placeholder Text</a></p>
            </div>
        )
    }

}
