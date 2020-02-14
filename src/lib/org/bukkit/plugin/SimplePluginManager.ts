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
	getPlugin(_name: string): Plugin;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	loadPlugin(file: File): Plugin;
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	getPlugins(): Array<Plugin>;
	registerInterface(loader: any): void;
	isPluginEnabled(plugin: Plugin): boolean;
	isPluginEnabled(_name: string): boolean;
	loadPlugins(directory: File): Array<Plugin>;
	disablePlugins(): void;
	clearPlugins(): void;
	callEvent(event: Event): void;
	registerEvents(listener: Listener, plugin: Plugin): void;
	getDefaultPermissions(op: boolean): any;
	getPermissionSubscriptions(permission: string): any;
	addPermission(perm: Permission): void;
	addPermission(perm: Permission, dirty: boolean): void;
	removePermission(perm: Permission): void;
	removePermission(_name: string): void;
	recalculatePermissionDefaults(perm: Permission): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	getDefaultPermSubscriptions(op: boolean): any;
	useTimings(use: boolean): void;
	useTimings(): boolean;
	dirtyPermissibles(): void;
	isTransitiveDepend(plugin: PluginDescriptionFile, depend: PluginDescriptionFile): boolean;
	getPermissions(): any;
	getPermission(_name: string): Permission;
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

