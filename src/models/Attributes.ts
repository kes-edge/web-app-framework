export class Attributes<T extends object> {
    constructor(private data: T) {}

    // Method for accessing properties within a user instance
    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    // Method for updating properties within a user instance
    set(update: T): void {
        Object.assign(this.data, update);
    }
}
