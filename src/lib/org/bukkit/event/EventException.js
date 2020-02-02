export default class EventException {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventException');
    }
    constructor(...args) {
        return new EventException.$javaClass(...args);
    }
}
