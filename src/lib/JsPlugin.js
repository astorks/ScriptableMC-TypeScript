import MysqlWrapper from "./com/smc/utils/MysqlWrapper.js";
import File from "./java/io/File.js";
export default class JsPlugin {
    get pluginName() {
        return this.constructor.name;
    }
    get server() {
        return this.context.getServer();
    }
    registerEvent(eventClass, callback) {
        this.context.registerEvent(eventClass['$javaClass'], callback.bind(this));
    }
    newCommand(name) {
        return this.context.newCommand(name);
    }
    unregisterCommand(command) {
        this.context.unregisterCommand(command);
    }
    registerCommand(command) {
        this.context.registerCommand(command);
    }
    registerIncomingPluginChannel(channel, callback) {
        return this.context.registerIncomingPluginChannel(channel, callback.bind(this));
    }
    unregisterIncomingPluginChannel(channel) {
        this.context.unregisterIncomingPluginChannel(channel);
    }
    registerOutgoingPluginChannel(channel) {
        this.context.registerOutgoingPluginChannel(channel);
    }
    unregisterOutgoingPluginChannel(channel) {
        this.context.unregisterOutgoingPluginChannel(channel);
    }
    getFile(pathName) {
        return new File(pathName);
    }
    newMysqlInstance(host, port, database, username, password) {
        return new MysqlWrapper(host, port, database, username, password);
    }
    mysqlFromConfig(configObject) {
        return this.newMysqlInstance(configObject.host, configObject.port, configObject.database, configObject.username, configObject.password);
    }
    setPlaceholders(player, placeholderText) {
        return this.context.setPlaceholders(player, placeholderText);
    }
    onLoad() { console.log("[" + this.pluginName + "] onLoad()"); }
    onEnable() { console.log("[" + this.pluginName + "] onEnable()"); }
    onDisable() { console.log("[" + this.pluginName + "] onDisable()"); }
}
