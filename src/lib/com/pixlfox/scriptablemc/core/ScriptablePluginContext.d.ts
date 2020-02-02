import EventExecutor from '../../../../org/bukkit/plugin/EventExecutor.js';
import FileWrapper from '../../../../com/pixlfox/scriptablemc/utils/FileWrapper.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import MysqlWrapper from '../../../../com/pixlfox/scriptablemc/utils/MysqlWrapper.js';
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js';
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import ScriptablePluginEngine from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js';
import Server from '../../../../org/bukkit/Server.js';
import ServicesManager from '../../../../org/bukkit/plugin/ServicesManager.js';
import SmartInventoryInterface from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryInterface.js';
import SmartItemBuilder from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js';
export default interface ScriptablePluginContext extends Listener {
    getServicesManager(): ServicesManager;
    unregisterCommand(command: PluginCommand): void;
    registerEvent(eventClass: any, executor: EventExecutor): void;
    registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    unregisterIncomingPluginChannel(channel: string): void;
    registerOutgoingPluginChannel(channel: string): void;
    unregisterOutgoingPluginChannel(channel: string): void;
    newCommand(_name: string): PluginCommand;
    registerCommand(command: PluginCommand): void;
    getJavaPlugin(): JavaPlugin;
    getServer(): Server;
    newMysqlInstance(host: string, port: number, database: string, username: string, password: string): MysqlWrapper;
    smartInventory(): SmartInventoryInterface;
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
    setPlaceholders(player: Player, placeholderText: string): string;
    setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
    getBukkitServiceRegistration(_class: any): any;
    getBukkitServiceRegistration(className: string): any;
    getPluginName(): string;
    getPluginInstance(): any;
    getFile(pathName: string): FileWrapper;
}
export default class ScriptablePluginContext {
    static get $javaClass(): any;
    constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
}
