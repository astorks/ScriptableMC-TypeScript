export default class GenericCommandHelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.GenericCommandHelpTopic');
    }
    constructor(...args) {
        return new GenericCommandHelpTopic.$javaClass(...args);
    }
}
