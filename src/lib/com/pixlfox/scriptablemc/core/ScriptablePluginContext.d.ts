import EventExecutor from '../../../../org/bukkit/plugin/EventExecutor.js';
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js';
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import ScriptablePluginEngine from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js';
import Server from '../../../../org/bukkit/Server.js';
import ServicesManager from '../../../../org/bukkit/plugin/ServicesManager.js';
export default interface ScriptablePluginContext extends Listener {
    unregisterIncomingPluginChannel(channel: string): void;
    getBukkitServiceRegistration(className: string): any;
    getBukkitServiceRegistration(_class: any): any;
    registerOutgoingPluginChannel(channel: string): void;
    unregisterOutgoingPluginChannel(channel: string): void;
    registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    setPlaceholders(player: Player, placeholderText: string): string;
    setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
    newCommand(_name: string): PluginCommand;
    getPluginInstance(): any;
    registerCommand(command: PluginCommand): void;
    getServicesManager(): ServicesManager;
    unregisterCommand(command: PluginCommand): void;
    registerEvent(eventClass: any, executor: EventExecutor): void;
    getPluginName(): string;
    getJavaPlugin(): JavaPlugin;
    getServer(): Server;
}
export default class ScriptablePluginContext {
    static get $javaClass(): any;
    constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
}
