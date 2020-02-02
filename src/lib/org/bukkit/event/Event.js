export default class Event {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Event');
    }
    constructor(...args) {
        return new Event.$javaClass(...args);
    }
}
