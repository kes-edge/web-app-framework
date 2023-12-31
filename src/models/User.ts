import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootURL = 'http://localhost:3000/users';

export class User {
    // Creating an instance of the Eventing and Syncing classes
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootURL);
    public attributes: Attributes<UserProps>;

    // Taking in the UserProperties
    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set( update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger('change')
    }

    fetch(): void{
        const id = this.get('id')

        if (typeof id!== 'number'){
            throw new Error('Cannot fetch without id')
        }
        this.sync.fetch(id).then((response: AxiosResponse) =>{
            this.set(response.data);
        })
    }

}
