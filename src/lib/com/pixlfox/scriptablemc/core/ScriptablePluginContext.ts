declare var Java: any;
import EventExecutor from '../../../../org/bukkit/plugin/EventExecutor.js'
import InventoryManager from '../../../../fr/minuskube/inv/InventoryManager.js'
import JavaPlugin from '../../../../org/bukkit/plugin/java/JavaPlugin.js'
import Listener from '../../../../org/bukkit/event/Listener.js'
import OfflinePlayer from '../../../../org/bukkit/OfflinePlayer.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PluginCommand from '../../../../org/bukkit/command/PluginCommand.js'
import PluginMessageListener from '../../../../org/bukkit/plugin/messaging/PluginMessageListener.js'
import PluginMessageListenerRegistration from '../../../../org/bukkit/plugin/messaging/PluginMessageListenerRegistration.js'
import ScriptablePluginEngine from '../../../../com/pixlfox/scriptablemc/core/ScriptablePluginEngine.js'
import Server from '../../../../org/bukkit/Server.js'
import ServicesManager from '../../../../org/bukkit/plugin/ServicesManager.js'
import Version from '../../../../com/smc/version/Version.js'

export default interface ScriptablePluginContext extends Listener {
	disable(): void;
	enable(): void;
	getBukkitServiceRegistration(_class: any): any;
	getBukkitServiceRegistration(className: string): any;
	getCommands(): Array<PluginCommand>;
	getEngine(): ScriptablePluginEngine;
	getInventoryManager(): InventoryManager;
	getJavaPlugin(): JavaPlugin;
	getPluginInstance(): any;
	getPluginName(): string;
	getPluginVersion(): Version;
	getServer(): Server;
	getServicesManager(): ServicesManager;
	isEnabled(): boolean;
	load(): void;
	newCommand(_name: string): PluginCommand;
	registerCommand(command: PluginCommand): void;
	registerEvent(eventClass: any, executor: EventExecutor): void;
	registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	registerOutgoingPluginChannel(channel: string): void;
	setPlaceholders(player: Player, placeholderText: string): string;
	setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
	unregisterCommand(command: PluginCommand): void;
	unregisterIncomingPluginChannel(channel: string): void;
	unregisterOutgoingPluginChannel(channel: string): void;
}

export default class ScriptablePluginContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginContext');
	}

	constructor();
	constructor(...args: any[]) {
		return new ScriptablePluginContext.$javaClass(...args);
	}

}

