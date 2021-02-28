import React from "react";

import { cx } from "emotion";
import Styles from "./MentorRequestCardStyles";

type Props = {};
type State = {};

export default class MentorRequestCardc extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.mentorReqCardStyles )}>
                <h2>Test</h2>
                <p>Test</p>
            </div>
        )
    }

}