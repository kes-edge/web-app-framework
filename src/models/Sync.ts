import axios, { AxiosPromise, AxiosResponse } from "axios";
import { UserProps } from "./User";

export class Sync {
    // Constructing the id to be used
    constructor(public rootURL: string) {}
    
    // Method for fetching user data from JSON server
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootURL}/${id}`)
    }

    // Method for saving user data to JSON server
    save(data: UserProps): void {
        const id = data.id;
        
        // Saving the data to a specific user if the user has an id
        if (data.id){
            axios.put(`${this.rootURL}/${this.id}`, data);
        } else {
            axios.post(this.rootURL, data);
        }
    }
}