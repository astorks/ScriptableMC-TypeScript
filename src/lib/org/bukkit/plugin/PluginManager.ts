declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Event} from '../../../org/bukkit/event/Event.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'

export interface PluginManager {
	getPermissions(): any;
	getPermission(_name: string): Permission;
	getPermissionSubscriptions(permission: string): any;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	getPlugin(_name: string): Plugin;
	loadPlugin(file: any): Plugin;
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	recalculatePermissionDefaults(perm: Permission): void;
	addPermission(perm: Permission): void;
	callEvent(event: Event): void;
	removePermission(_name: string): void;
	removePermission(perm: Permission): void;
	loadPlugins(directory: any): Array<Plugin>;
	isPluginEnabled(_name: string): boolean;
	isPluginEnabled(plugin: Plugin): boolean;
	clearPlugins(): void;
	disablePlugins(): void;
	registerEvents(listener: Listener, plugin: Plugin): void;
	registerInterface(loader: any): void;
	getPlugins(): Array<Plugin>;
	useTimings(): boolean;
	getDefaultPermSubscriptions(op: boolean): any;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	getDefaultPermissions(op: boolean): any;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

