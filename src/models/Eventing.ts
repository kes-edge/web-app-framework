// Interface for the callback function
type Callback = () => {};

// Class for handling events
export class Eventing {
    // Event handling object
    events: { [key: string]: Callback[] } = {};  

    // Method for listening for events
    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    // Method for triggering events
    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) {
            return;
        }
        handlers.forEach(callback => {
            callback();
        });
    }
}