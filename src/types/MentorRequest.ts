import Tag from "./Tag";

type MentorRequest = {
    id: string,
    name: string,
    description: string,
    location: {
        lat: number,
        lng: number
    },
    tags: Tag[]
};

export default MentorRequest;
