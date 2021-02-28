import React from "react";

import TagType from "../../../types/Tag";

import { cx } from "emotion";
import Styles from "./TagStyles";

type Props = {
    tag: TagType
};
type State = {};

export default class Tag extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <span className={cx( Styles.tagStyles )}>
                #&nbsp;{this.props.tag.name}
            </span>
        )
    }

}