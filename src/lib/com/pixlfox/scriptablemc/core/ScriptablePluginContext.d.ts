import { FileWrapper } from '../../../../com/pixlfox/scriptablemc/utils/FileWrapper.js';
import { PluginMessageListenerRegistration } from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import { PluginMessageListener } from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import { PluginCommand } from '../../../../org/bukkit/command/PluginCommand.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { OfflinePlayer } from '../../../../org/bukkit/OfflinePlayer.js';
import { MysqlWrapper } from '../../../../com/pixlfox/scriptablemc/utils/MysqlWrapper.js';
import { SmartItemBuilder } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { SmartInventoryInterface } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryInterface.js';
import { EventExecutor } from '../../../../org/bukkit/plugin/EventExecutor.js';
import { Server } from '../../../../org/bukkit/Server.js';
import { JavaPlugin } from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import { ScriptablePluginEngine } from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js';
import { Listener } from '../../../../org/bukkit/event/Listener.js';
export interface ScriptablePluginContext extends Listener {
    getFile(pathName: string): FileWrapper;
    unregisterIncomingPluginChannel(channel: string): void;
    unregisterOutgoingPluginChannel(channel: string): void;
    registerOutgoingPluginChannel(channel: string): void;
    registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    getPluginName(): string;
    newCommand(_name: string): PluginCommand;
    getPluginInstance(): any;
    setPlaceholders(player: Player, placeholderText: string): string;
    setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
    newMysqlInstance(host: string, port: number, database: string, username: string, password: string): MysqlWrapper;
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
    registerCommand(command: PluginCommand): void;
    smartInventory(): SmartInventoryInterface;
    unregisterCommand(command: PluginCommand): void;
    registerEvent(eventClass: any, executor: EventExecutor): void;
    getServer(): Server;
    getJavaPlugin(): JavaPlugin;
}
export declare class ScriptablePluginContext {
    static get $javaClass(): any;
    constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
}
