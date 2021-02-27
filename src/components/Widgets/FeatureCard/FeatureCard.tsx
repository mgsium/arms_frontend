import React from "react";

import { cx } from "emotion";
import Styles from "./FeatureCardStyles";
import { Circle } from "react-feather";

type Props = {
    header: string,
    imageUrl?: string
};
type State = {};

export default class FeatureCard extends React.Component<Props, State> {

    static defaultProps = {
        imageUrl: "https://images.unsplash.com/photo-1483356256511-b48749959172?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.featureCardStyles, "shadow-sm" )}>
                <img 
                    src={this.props.imageUrl}
                    style={{ width: "100%", borderRadius: "1rem", marginBottom: 10 }}
                />
                <div style={{ margin: 12 }}>
                    <h5>
                        {/*<Circle size={12} style={{ verticalAlign: "middle", marginBottom: 3 }}/>&nbsp;&nbsp;*/}
                        {this.props.header}
                    </h5>
                    <div className="card-description">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}