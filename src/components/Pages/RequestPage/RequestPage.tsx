import React from "react";

import { cx } from "emotion";
import Styles from "./RequestPageStyles";
import MentorRequest from "../../../types/MentorRequest";
import Template from "../Template/Template";
import LoadingPage from "../LoadingPage/LoadingPage";
import Tag from "../../Widgets/Tag/Tag";
import { Button } from "react-bootstrap";

type Props = {};
type State = {
    request: MentorRequest
};

export default class RequestPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

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

        this.state = {
            request: null
        }

        setTimeout(() => {
            this.setState({ request: dummyRequest });
        }, 2000);
    }

    render() {

        if(!this.state.request) {
            return (
                <LoadingPage/>
            )
        }

        return (
            <Template> 
                <div style={{ display: "table", marginLeft: "auto", marginRight: "auto", minHeight: "80vh" }}>
                    <div style={{ display: "table-cell", verticalAlign: "middle", border: "2px solid #DCDCDC", borderRadius: "1.25rem" }}>
                        <h1 className="page-header">{this.state.request.name}</h1>
                        <h3 className={cx( Styles.requestAuthorStyles )}>A Request by <strong>Placeholder Name</strong></h3>
                        <br/><br/>
                        <div className={cx( Styles.requestBodyStyles )}>
                            <p className={cx( Styles.requestDescriptionStyles )}>{this.state.request.description}</p>
                            <br/>
                            <section className="tag-list">
                                <Tag tag={{ name: "Jason Calacanis" }}/>
                                <Tag tag={{ name: "Random" }}/>
                                <Tag tag={{ name: "RFC" }}/>
                            </section>
                            <br/><br/>
                            <Button variant="primary" className={cx( Styles.offerHelpBtnStyles )}>
                                Offer Mentorship
                            </Button>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }

}