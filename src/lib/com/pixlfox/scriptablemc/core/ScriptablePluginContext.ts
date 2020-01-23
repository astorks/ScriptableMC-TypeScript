declare var Java: any;
import {File} from '../../../../com/pixlfox/scriptablemc/File.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {Server} from '../../../../org/bukkit/Server.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {EventExecutor} from '../../../../org/bukkit/plugin/EventExecutor.js'
import {CommandAPI} from '../../../../io/github/jorelali/commandapi/api/CommandAPI.js'
import {SmartInventoryInterface} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryInterface.js'
import {CommandExecutor} from '../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {ScriptablePluginEngine} from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginContext extends Listener {
	getFile(pathName: string): File;
	getJavaPlugin(): JavaPlugin;
	getServer(): Server;
	unregisterCommand(command: PluginCommand): void;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	getCommandApi(): CommandAPI;
	smartInventory(): SmartInventoryInterface;
	getPluginInstance(): any;
	registerCommandApi(_name: string, executor: CommandExecutor): void;
	registerCommand(command: PluginCommand): void;
	getPluginName(): string;
	newCommand(_name: string): PluginCommand;
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	unregisterIncomingPluginChannel(channel: string): void;
	unregisterOutgoingPluginChannel(channel: string): void;
	registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	registerOutgoingPluginChannel(channel: string): void;
}

export class ScriptablePluginContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginContext');
	}
	constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
	constructor(...args: any[]) {
		return new ScriptablePluginContext.$javaClass(...args);
	}
}
