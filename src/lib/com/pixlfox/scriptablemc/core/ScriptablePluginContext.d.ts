import { PluginCommand } from '../../../../org/bukkit/command/PluginCommand.js';
import { EventExecutor } from '../../../../org/bukkit/plugin/EventExecutor.js';
import { PluginMessageListenerRegistration } from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js';
import { PluginMessageListener } from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js';
import { SmartInventoryInterface } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryInterface.js';
import { SmartItemBuilder } from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js';
import { ItemStack } from '../../../../org/bukkit/inventory/ItemStack.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { OfflinePlayer } from '../../../../org/bukkit/OfflinePlayer.js';
import { JavaPlugin } from '../../../../org/bukkit/plugin/java/JavaPlugin.js';
import { Server } from '../../../../org/bukkit/Server.js';
import { File } from '../../../../com/pixlfox/scriptablemc/utils/File.js';
import { ScriptablePluginEngine } from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js';
import { Listener } from '../../../../org/bukkit/event/Listener.js';
export interface ScriptablePluginContext extends Listener {
    unregisterCommand(command: PluginCommand): void;
    registerEvent(eventClass: any, executor: EventExecutor): void;
    registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
    unregisterIncomingPluginChannel(channel: string): void;
    registerOutgoingPluginChannel(channel: string): void;
    unregisterOutgoingPluginChannel(channel: string): void;
    newCommand(_name: string): PluginCommand;
    registerCommand(command: PluginCommand): void;
    smartInventory(): SmartInventoryInterface;
    itemBuilder(itemStack: ItemStack): SmartItemBuilder;
    setPlaceholders(player: Player, placeholderText: string): string;
    setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
    getJavaPlugin(): JavaPlugin;
    getServer(): Server;
    getPluginName(): string;
    getPluginInstance(): any;
    getFile(pathName: string): File;
}
export declare class ScriptablePluginContext {
    static get $javaClass(): any;
    constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
}
