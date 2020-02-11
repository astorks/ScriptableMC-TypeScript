export default class Note {
    static get $javaClass() {
        return Java.type('org.bukkit.Note');
    }
    constructor(...args) {
        return new Note.$javaClass(...args);
    }
    static natural(...args) {
        return Note.$javaClass.natural(...args);
    }
    static flat(...args) {
        return Note.$javaClass.flat(...args);
    }
    static sharp(...args) {
        return Note.$javaClass.sharp(...args);
    }
}
