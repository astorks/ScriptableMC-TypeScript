export class HelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopic');
    }
    constructor(...args) {
        return new HelpTopic.$javaClass(...args);
    }
}
//# sourceMappingURL=HelpTopic.js.map