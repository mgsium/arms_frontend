import React from "react";

import { cx } from "emotion";
import Styles from "./LoadingPageStyles";
import { FillSpinner } from "react-spinners-kit";

type Props = {};
type State = {};

export default class LoadingPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className={cx( Styles.horizontalCentre )}>
                <div className={cx( Styles.verticalCentre )}>
                    <h2>Armstrong</h2>
                    <br/>
                    <div style={{ display: "table", marginLeft: "auto", marginRight: "auto"}}>
                        <FillSpinner size={40}/>
                    </div>
                </div>
            </div>
        )
    }

}
