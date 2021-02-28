import Tag from "./Tag";

type MentorRequest = {
    name: string,
    description: string,
    location: {
        lat: number,
        lng: number
    },
    Tag: Tag
};

export default MentorRequest;