declare var Java: any;
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginDescriptionFile from '../../../org/bukkit/plugin/PluginDescriptionFile.js'
import PluginManager from '../../../org/bukkit/plugin/PluginManager.js'
import Server from '../../../org/bukkit/Server.js'
import SimpleCommandMap from '../../../org/bukkit/command/SimpleCommandMap.js'

export default interface SimplePluginManager extends PluginManager {
	addPermission(perm: Permission): void;
	addPermission(perm: Permission, dirty: boolean): void;
	callEvent(event: Event): void;
	clearPlugins(): void;
	dirtyPermissibles(): void;
	disablePlugin(plugin: Plugin): void;
	disablePlugins(): void;
	enablePlugin(plugin: Plugin): void;
	getDefaultPermSubscriptions(op: boolean): any;
	getDefaultPermissions(op: boolean): any;
	getPermission(_name: string): Permission;
	getPermissionSubscriptions(permission: string): any;
	getPermissions(): any;
	getPlugin(_name: string): Plugin;
	getPlugins(): Array<Plugin>;
	isPluginEnabled(plugin: Plugin): boolean;
	isPluginEnabled(_name: string): boolean;
	isTransitiveDepend(plugin: PluginDescriptionFile, depend: PluginDescriptionFile): boolean;
	loadPlugin(file: File): Plugin;
	loadPlugins(directory: File): Array<Plugin>;
	recalculatePermissionDefaults(perm: Permission): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	registerEvents(listener: Listener, plugin: Plugin): void;
	registerInterface(loader: any): void;
	removePermission(_name: string): void;
	removePermission(perm: Permission): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	useTimings(): boolean;
	useTimings(use: boolean): void;
}

export default class SimplePluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.SimplePluginManager');
	}

	constructor(instance: Server, commandMap: SimpleCommandMap);
	constructor(...args: any[]) {
		return new SimplePluginManager.$javaClass(...args);
	}

}

