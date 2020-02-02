export default class SlotPos {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.SlotPos');
    }
    constructor(...args) {
        return new SlotPos.$javaClass(...args);
    }
    static of(...args) {
        return SlotPos.$javaClass.of(...args);
    }
}
