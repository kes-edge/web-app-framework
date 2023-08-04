import axios, { AxiosResponse } from "axios";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
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

    // Method for fetching user data from JSON server
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get("id")}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
        });
    }

    // Method for saving user data to JSON server
    save(): void {
        const id = this.get("id");
        
        // Saving the data to a specific user if the user has an id
        if (this.get('id')){
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}
