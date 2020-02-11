import Event from "./org/bukkit/event/Event.js";
import Server from "./org/bukkit/Server.js";
import ScriptablePluginContext from "./com/pixlfox/scriptablemc/core/ScriptablePluginContext.js";
import PluginCommand from "./org/bukkit/command/PluginCommand.js";
import Player from "./org/bukkit/entity/Player.js";
import PluginMessageListenerRegistration from "./org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js";
import OfflinePlayer from "./org/bukkit/OfflinePlayer.js";
import MysqlWrapper from "./com/smc/utils/MysqlWrapper.js";
import File from "./java/io/File.js";
declare type Type<T> = {
    new (...args: any[]): T;
};
export default class JsPlugin {
    context: ScriptablePluginContext;
    get pluginName(): string;
    get server(): Server;
    registerEvent<T extends Event>(eventClass: Type<T>, callback: (listener: any, event: T) => void): void;
    newCommand(name: string): PluginCommand;
    unregisterCommand(command: PluginCommand): void;
    registerCommand(command: PluginCommand): void;
    registerIncomingPluginChannel(channel: string, callback: (channel: string, player: Player, message: number[]) => void): PluginMessageListenerRegistration;
    unregisterIncomingPluginChannel(channel: string): void;
    registerOutgoingPluginChannel(channel: string): void;
    unregisterOutgoingPluginChannel(channel: string): void;
    getFile(pathName: string): File;
    newMysqlInstance(host: string, port: number, database: string, username: string, password: string): MysqlWrapper;
    mysqlFromConfig(configObject: {
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
    }): MysqlWrapper;
    setPlaceholders(player: (Player | OfflinePlayer), placeholderText: string): string;
    onLoad(): void;
    onEnable(): void;
    onDisable(): void;
}
export {};
