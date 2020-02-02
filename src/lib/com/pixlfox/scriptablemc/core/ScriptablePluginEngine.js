export default class ScriptablePluginEngine {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
    }
    constructor(...args) {
        return new ScriptablePluginEngine.$javaClass(...args);
    }
    static access$getInst$cp(...args) {
        return ScriptablePluginEngine.$javaClass.access$getInst$cp(...args);
    }
    static access$setInst$cp(...args) {
        return ScriptablePluginEngine.$javaClass.access$setInst$cp(...args);
    }
}
