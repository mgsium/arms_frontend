import React from "react";

import { cx } from "emotion";
import Styles from "./DescReqStyles";
import MakeRequestStyles from "../MakeRequestStyles";

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { ArrowRight } from "react-feather";

import $ from "jquery";

import Tag from "../../../../types/Tag";
import AuthCard from '../../../Widgets/AuthCard/AuthCard';

type Props = {
    currentPageIndex: 0 | 1 | 2 | 3,
    updatePageIndex: Function,
    confirmDescription: Function
};
type State = {
    description: string,
    tags: Tag[]
};

export default class DescReq extends React.Component<Props, State> {
    
    headerCharacterLimit: number = 50;
    descriptionCharacterLimit: number = 200;
    authorNameCharacterLimit: number = 40;
    moreInfoCharacterLimit: number = 200;

    constructor(props: Props) {
        super(props);

        this.state = {
            description: "",
            tags: []
        }

        // Method Bindings
        this.updateDescription = this.updateDescription.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    updateDescription(e:any) {
        if(e.target.value.length > this.descriptionCharacterLimit) return;
        this.setState({ description: e.target.value });
    }

    updateTags(e:any) {
        this.setState({ tags: [e.target.value] });
    }

    render() {
        return (
            <div id="DescReqPage" hidden={ this.props.currentPageIndex != 1 }>
                <h1 className="page-header">Describe what mentorship you're looking for</h1>
                <br/>
                <AuthCard>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                placeholder="Description..." 
                                id="desc_field"
                                as="textarea"
                                rows={3}
                                size="lg"
                                onChange={this.updateDescription}
                                onFocus={this.updateDescription}
                            />
                            <Form.Text className="text-muted">
                                Expand on what you are looking for from a Mentor
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                placeholder="Add a tag..."
                                id="tag_field"
                                type="text"
                                size="lg"
                                onChange={this.updateTags}
                                onFocus={this.updateTags}
                                style={{ width:"40%", display:"table", marginLeft:"auto", marginRight:"auto" }}
                            />
                            <Form.Text style={{ display:"table" }} className="text-muted ml-auto mr-auto">
                                Input a few tags so Mentors can find your request more easily
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <Button variant="success" className="ml-auto mr-auto" style={{ display: "table", width:"40%" }} onClick={() => { this.props.updatePageIndex(2); this.props.confirmDescription(this.state.description, this.state.tags)}}>
                        <h3 style={{ margin: 0, display: "inline-block" }}>Set your location&nbsp;<ArrowRight/></h3>
                    </Button>
                </AuthCard>
                <br/><br/>

                
            </div>
        )
    }

}