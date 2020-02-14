declare var Java: any;
import Event from '../../../org/bukkit/event/Event.js'
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js'
import EventPriority from '../../../org/bukkit/event/EventPriority.js'
import File from '../../../java/io/File.js'
import Listener from '../../../org/bukkit/event/Listener.js'
import Permissible from '../../../org/bukkit/permissions/Permissible.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PluginManager {
	getPlugin(arg0: string): Plugin;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
	loadPlugin(arg0: File): Plugin;
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	getPlugins(): Array<Plugin>;
	registerInterface(arg0: any): void;
	isPluginEnabled(arg0: Plugin): boolean;
	isPluginEnabled(arg0: string): boolean;
	loadPlugins(arg0: File): Array<Plugin>;
	disablePlugins(): void;
	clearPlugins(): void;
	callEvent(arg0: Event): void;
	registerEvents(arg0: Listener, arg1: Plugin): void;
	getDefaultPermissions(arg0: boolean): any;
	getPermissionSubscriptions(arg0: string): any;
	addPermission(arg0: Permission): void;
	removePermission(arg0: string): void;
	removePermission(arg0: Permission): void;
	recalculatePermissionDefaults(arg0: Permission): void;
	subscribeToPermission(arg0: string, arg1: Permissible): void;
	unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
	getDefaultPermSubscriptions(arg0: boolean): any;
	useTimings(): boolean;
	getPermissions(): any;
	getPermission(arg0: string): Permission;
}

export default class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

