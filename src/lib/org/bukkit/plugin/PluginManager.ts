declare var Java: any;
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'
import {Event} from '../../../org/bukkit/event/Event.js'

export interface PluginManager {
	getPermissions(): any;
	getPermission(_name: string): Permission;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin): void;
	registerEvent(event: any, listener: Listener, priority: EventPriority, executor: EventExecutor, plugin: Plugin, ignoreCancelled: boolean): void;
	loadPlugin(file: any): Plugin;
	enablePlugin(plugin: Plugin): void;
	disablePlugin(plugin: Plugin): void;
	getPlugin(_name: string): Plugin;
	getPermissionSubscriptions(permission: string): any;
	subscribeToDefaultPerms(op: boolean, permissible: Permissible): void;
	subscribeToPermission(permission: string, permissible: Permissible): void;
	unsubscribeFromDefaultPerms(op: boolean, permissible: Permissible): void;
	unsubscribeFromPermission(permission: string, permissible: Permissible): void;
	recalculatePermissionDefaults(perm: Permission): void;
	getDefaultPermSubscriptions(op: boolean): any;
	getDefaultPermissions(op: boolean): any;
	registerEvents(listener: Listener, plugin: Plugin): void;
	disablePlugins(): void;
	useTimings(): boolean;
	getPlugins(): Array<Plugin>;
	callEvent(event: Event): void;
	removePermission(_name: string): void;
	removePermission(perm: Permission): void;
	addPermission(perm: Permission): void;
	isPluginEnabled(plugin: Plugin): boolean;
	isPluginEnabled(_name: string): boolean;
	registerInterface(loader: any): void;
	clearPlugins(): void;
	loadPlugins(directory: any): Array<Plugin>;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

