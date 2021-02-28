import React from "react";

import MentorRequestCard from "../components/Widgets/MentorRequestCard/MentorRequestCard";
import MentorRequest from "../types/MentorRequest";

export default class RequestMapper {

    static async mapRequest(request: MentorRequest) {
        return (
            <MentorRequestCard request={request}/>
        )
    }

}