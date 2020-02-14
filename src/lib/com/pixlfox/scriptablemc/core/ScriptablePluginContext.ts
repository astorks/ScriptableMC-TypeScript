declare var Java: any;
import EventExecutor from '../../../../org/bukkit/plugin/EventExecutor.js'
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

export default interface ScriptablePluginContext extends Listener {
	getServer(): Server;
	getPluginName(): string;
	getPluginInstance(): any;
	unregisterIncomingPluginChannel(channel: string): void;
	registerOutgoingPluginChannel(channel: string): void;
	unregisterOutgoingPluginChannel(channel: string): void;
	newCommand(_name: string): PluginCommand;
	registerCommand(command: PluginCommand): void;
	registerIncomingPluginChannel(channelName: string, listener: PluginMessageListener): PluginMessageListenerRegistration;
	setPlaceholders(player: OfflinePlayer, placeholderText: string): string;
	setPlaceholders(player: Player, placeholderText: string): string;
	getBukkitServiceRegistration(_class: any): any;
	getBukkitServiceRegistration(className: string): any;
	getJavaPlugin(): JavaPlugin;
	getServicesManager(): ServicesManager;
	unregisterCommand(command: PluginCommand): void;
	registerEvent(eventClass: any, executor: EventExecutor): void;
}

export default class ScriptablePluginContext {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginContext');
	}
	constructor(engine: ScriptablePluginEngine, pluginName: string, pluginInstance: any);
	constructor(...args: any[]) {
		return new ScriptablePluginContext.$javaClass(...args);
	}
}

