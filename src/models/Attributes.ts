export class Attributes<T extends object> {
    constructor(private data: T) {}

    // Method for accessing properties within a user instance
    get(propName: string): (number | string) {
        return this.data[propName];
    }

    // Method for updating properties within a user instance
    set(update: T): void {
        Object.assign(this.data, update);
    }
}