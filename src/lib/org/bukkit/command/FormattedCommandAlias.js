export default class FormattedCommandAlias {
    static get $javaClass() {
        return Java.type('org.bukkit.command.FormattedCommandAlias');
    }
    constructor(...args) {
        return new FormattedCommandAlias.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return FormattedCommandAlias.$javaClass.broadcastCommandMessage(...args);
    }
}
