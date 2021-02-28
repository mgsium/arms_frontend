import Tag from "./Tag";

type MentorRequest = {
    name: string,
    description: string,
    location: {
        lat: number,
        lng: number
    },
    tag: Tag
}

export default MentorRequest