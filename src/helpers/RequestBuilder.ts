import Tag from "../types/Tag";
import Request from "../types/MentorRequest";

export default class RequestBuilder {

    private name: string;
    private description: string;
    private location: {
        lat: number,
        lng: number
    };
    private tag: Tag;

    public setName(name: string) { this.name = name }
    public setDescription(description: string) { this.description = description }
    public setLocation(location: {lat:number, lng:number}) { this.location = location }
    public setTag(tag: Tag) { this.tag = tag }

    public getName() { return this.name }
    public getDescription() { return this.description }
    public getLocation() { return this.location }
    public getTag() { return this.tag }

    public buildRequest(): Request {
        return {
            name: this.name,
            description: this.description,
            location: this.location,
            tag: this.tag
        }
    }
}