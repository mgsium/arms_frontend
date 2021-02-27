import React from "react";

import { cx } from "emotion";
import Styles from "./TemplateStyles";
import TemplateNavbar from "./TemplateNavbar/TemplateNavbar";
import TemplateFooter from "./TemplateFooter/TemplateFooter";

type Props = {};
type State = {};

export default class Template extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <TemplateNavbar/>
                <div className={cx( Styles.templateBodyStyles, "ml-auto mr-auto" )}>
                    <br/>
                    {this.props.children}
                </div>
                <br/><br/><br/>
                <TemplateFooter/>
            </>
        )
    }

}