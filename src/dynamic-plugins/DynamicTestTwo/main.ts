import JsPlugin from '../../lib/JsPlugin.js';

export default class DynamicTestTwo extends JsPlugin {
    onLoad() {
        console.log("[" + this.pluginName + "] onLoad()");
    }

    onEnable() {
        console.log("[" + this.pluginName + "] onEnable()");
    }

    onDisable() {
        console.log("[" + this.pluginName + "] onDisable()");
    }
}