declare var Java: any;
import {Server} from '../../../../org/bukkit/Server.js'
import {JavaPlugin} from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import {PluginCommand} from '../../../../org/bukkit/command/PluginCommand.js'
import {EventExecutor} from '../../../../org/bukkit/plugin/EventExecutor.js'
import {PluginMessageListenerRegistration} from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import {PluginMessageListener} from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import {CommandExecutor} from '../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'
import {SmartInventoryInterface} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartInventoryInterface.js'
import {SmartItemBuilder} from '../../../../com/pixlfox/scriptablemc/smartinvs/SmartItemBuilder.js'
import {ItemStack} from '../../../../org/bukkit/inventory/ItemStack.js'
import {OfflinePlayer} from '../../../../org/bukkit/OfflinePlayer.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {CommandAPI} from '../../../../io/github/jorelali/commandapi/api/CommandAPI.js'
import {File} from '../../../../com/pixlfox/scriptablemc/File.js'
import {ScriptablePluginEngine} from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js'
import {Listener} from '../../../../org/bukkit/event/Listener.js'

export interface ScriptablePluginContext extends Listener {
	getServer(): Server;
	getJavaPlugin(): JavaPlugin;
	unregisterCommand(command: PluginCommand): void;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	unregisterIncomingPluginChannel(channel: string): void;
	registerOutgoingPluginChannel(channel: string): void;
	unregisterOutgoingPluginChannel(channel: string): void;
	newCommand(_name: string): PluginCommand;
	registerCommand(command: PluginCommand): void;
	registerCommandApi(_name: string, executor: CommandExecutor): void;
	smartInventory(): SmartInventoryInterface;
	itemBuilder(itemStack: ItemStack): SmartItemBuilder;
	setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
	setPlaceholders(player: Player, placeholderText: string): string;
	getPluginName(): string;
	getPluginInstance(): any;
	getCommandApi(): CommandAPI;
	getFile(pathName: string): File;
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

