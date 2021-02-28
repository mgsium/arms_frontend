import Tag from "../types/Tag";
import MentorRequest from "../types/MentorRequest";

export default class RequestBuilder {

    private id: string;
    private name: string;
    private description: string;
    private location: {
        lat: number,
        lng: number
    };
    private tags: Tag[];

    public setId(id: string) { this.id = id }
    public setName(name: string) { this.name = name }
    public setDescription(description: string) { this.description = description }
    public setLocation(location: {lat:number, lng:number}) { this.location = location }
    public setTags(tags: Tag[]) { this.tags = tags }

    public getId() { return this.id }
    public getName() { return this.name }
    public getDescription() { return this.description }
    public getLocation() { return this.location }
    public getTags() { return this.tags }

    public buildRequest(): MentorRequest {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            location: this.location,
            tags: this.tags
        }
    }
}