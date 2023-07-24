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
      

    get(propName: string): (number | string) {
        return this.data[propName];
    }
}