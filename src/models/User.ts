import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    // Creating an instance of the Eventing and Syncing classes
    public events: Eventing = new Eventing();
    public sync: Sync = new Sync();
    
    // Constructing the class properties
    constructor(private data: UserProps) {}
      
    // Method for accessing properties within a user instance
    get(propName: string): (number | string) {
        return this.data[propName];
    }

    // Method for updating properties within a user instance
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}
