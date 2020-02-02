export default class MultipleCommandAlias {
    static get $javaClass() {
        return Java.type('org.bukkit.command.MultipleCommandAlias');
    }
    constructor(...args) {
        return new MultipleCommandAlias.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return MultipleCommandAlias.$javaClass.broadcastCommandMessage(...args);
    }
}
