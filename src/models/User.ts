interface UserProps {
    name: string;
    age: number;
}

export class User {
    name: string;
    age: number;
    constructor(private data: UserProps) {
        this.name = data.name;
        this.age = data.age;
    }
      
    // Method for accessing properties within a user instance
    get(propName: string): (number | string) {
        return this.data[propName];
    }

    // Method for updating properties within a user instance
    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}