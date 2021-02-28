import React from "react";

import { cx } from "emotion";
import Styles from "./MakeRequestStyles";
import Template from "../Template/Template";
import { Form, Button } from "react-bootstrap";
import AuthCard from "../../Widgets/AuthCard/AuthCard";

import NameReqPage from "./NameReqPage/NameReq";
import DescReqPage from "./DescReqPage/DescReq";

import RequestBuilder from '../../../helpers/RequestBuilder';
import Tag from "../../../types/Tag";
import MentorRequest from '../../../types/MentorRequest';


type Props = {};
type State = {
    currentPageIndex: 0 | 1 | 2 | 3,
    requestBuilder: RequestBuilder
};

export default class MakeRequest extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            currentPageIndex: 0,
            requestBuilder: new RequestBuilder()
        };

        // Method Bindings
        this.confirmName = this.confirmName.bind(this)
        this.confirmDescAndTags = this.confirmDescAndTags.bind(this)
        this.confirmLocation = this.confirmLocation.bind(this)
        this.submitRequest = this.submitRequest.bind(this)
        this.updatePageIndex = this.updatePageIndex.bind(this)
    }

    confirmName(name: string) {
        const requestBuilder: RequestBuilder = this.state.requestBuilder
        requestBuilder.setName(name);
        this.setState({ requestBuilder: requestBuilder })
    }

    confirmDescAndTags(description: string, tags: Array<Tag>) {
        const requestBuilder: RequestBuilder = this.state.requestBuilder
        requestBuilder.setDescription(description);
        requestBuilder.setTags(tags);
        this.setState({ requestBuilder: requestBuilder })
    }

    confirmLocation(location: {lat:number, lng:number} ) {
        const requestBuilder: RequestBuilder = this.state.requestBuilder
        requestBuilder.setLocation(location);
        this.setState({ requestBuilder: requestBuilder })
    }

    updatePageIndex(index: 0 | 1 | 2 | 3) {
        this.setState({ currentPageIndex: index });
    }

    submitRequest() {
        const requestBuilder: RequestBuilder = this.state.requestBuilder;
        const mentorRequest: MentorRequest = requestBuilder.buildRequest();
    }

    render() {
        return (
            <Template>
                <NameReqPage
                    currentPageIndex={this.state.currentPageIndex}
                    confirmName={this.confirmName}
                    updatePageIndex={this.updatePageIndex}
                />
                <DescReqPage
                    currentPageIndex={this.state.currentPageIndex}
                    confirmDescription={this.confirmDescAndTags}
                    updatePageIndex={this.updatePageIndex}
                />
            </Template>
        )
    }

}