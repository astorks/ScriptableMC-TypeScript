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
    getFile(pathName: string): FileWrapper;
    getJavaPlugin(): JavaPlugin;
    getServer(): Server;
    getServicesManager(): ServicesManager;
    unregisterOutgoingPluginChannel(channel: string): void;
    registerOutgoingPluginChannel(channel: string): void;
    unregisterIncomingPluginChannel(channel: string): void;
    registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    getBukkitServiceRegistration(_class: any): any;
    getBukkitServiceRegistration(className: string): any;
    setPlaceholders(player: Player, placeholderText: string): string;
    setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
    unregisterCommand(command: PluginCommand): void;
    newCommand(_name: string): PluginCommand;
    smartInventory(): SmartInventoryInterface;
    newMysqlInstance(host: string, port: number, database: string, username: string, password: string): MysqlWrapper;
    getPluginInstance(): any;
    registerEvent(eventClass: any, executor: EventExecutor): void;
    registerCommand(command: PluginCommand): void;
    getPluginName(): string;
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
}
export default class ScriptablePluginContext {
    static get $javaClass(): any;
    constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
}
