export default class ScriptablePluginContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginContext');
    }
    constructor(...args) {
        return new ScriptablePluginContext.$javaClass(...args);
    }
}
