import Tag from "./Tag";

type Request = {
    name: string,
    description: string,
    location: {
        lat: number,
        lng: number
    },
    Tag: Tag
}

export default Tag