import axios, { AxiosResponse } from "axios";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

// Interface for the callback function
type Callback = () => {};

export class User {
    // Constructing the class properties
    events: { [key: string]: Callback[] } = {};  
    constructor(private data: UserProps) {}
      
    // Method for accessing properties within a user instance
    get(propName: string): (number | string) {
        return this.data[propName];
    }

    // Method for updating properties within a user instance
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    // Method for listening for events
    on(eventName: string, callback: Callback): void {
        // Initialising the handlers array
        const handlers = this.events[eventName] || [];

        // Pushing the callback function into the handlers array
        handlers.push(callback);

        // Assigning the handlers array to the events object
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        // Checking if the event exists
        const handlers = this.events[eventName];

        // If the event doesn't exist, return
        if (!handlers || handlers.length === 0) {
            return;
        }

        // If the event does exist, loop through the handlers and execute them
        handlers.forEach(callback => {
            callback();
        });
    }

    // Method for fetching user data from JSON server
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get("id")}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
        });
    }
}
