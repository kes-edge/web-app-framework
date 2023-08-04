import axios, { AxiosResponse } from "axios";

export class Sync {
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