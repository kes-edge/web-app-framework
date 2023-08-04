import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasId {
    id: number;
}

export class Sync<T extends HasId> {
    // Constructing the id to be used
    constructor(public rootURL: string) {}
    
    // Method for fetching user data from JSON server
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootURL}/${id}`)
    }

    // Method for saving user data to JSON server
    save(data: T): AxiosPromise {
        const id = data.id;
        
        // Saving the data to a specific user if the user has an id
        if (data.id){
            return axios.put(`${this.rootURL}/${data.id}`, data);
        } else {
            return axios.post(this.rootURL, data);
        }
    }
}