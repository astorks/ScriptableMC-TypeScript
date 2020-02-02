export default class NotePlayEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.NotePlayEvent');
    }
    constructor(...args) {
        return new NotePlayEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return NotePlayEvent.$javaClass.getHandlerList(...args);
    }
}
