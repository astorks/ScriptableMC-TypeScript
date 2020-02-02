export default class IndexHelpTopic {
    static get $javaClass() {
        return Java.type('org.bukkit.help.IndexHelpTopic');
    }
    constructor(...args) {
        return new IndexHelpTopic.$javaClass(...args);
    }
}
