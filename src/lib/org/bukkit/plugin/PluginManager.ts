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
	addPermission(arg0: Permission): void;
	callEvent(arg0: Event): void;
	clearPlugins(): void;
	disablePlugin(arg0: Plugin): void;
	disablePlugins(): void;
	enablePlugin(arg0: Plugin): void;
	getDefaultPermSubscriptions(arg0: boolean): any;
	getDefaultPermissions(arg0: boolean): any;
	getPermission(arg0: string): Permission;
	getPermissionSubscriptions(arg0: string): any;
	getPermissions(): any;
	getPlugin(arg0: string): Plugin;
	getPlugins(): Array<Plugin>;
	isPluginEnabled(arg0: Plugin): boolean;
	isPluginEnabled(arg0: string): boolean;
	loadPlugin(arg0: File): Plugin;
	loadPlugins(arg0: File): Array<Plugin>;
	recalculatePermissionDefaults(arg0: Permission): void;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
	registerEvents(arg0: Listener, arg1: Plugin): void;
	registerInterface(arg0: any): void;
	removePermission(arg0: string): void;
	removePermission(arg0: Permission): void;
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
	subscribeToPermission(arg0: string, arg1: Permissible): void;
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
	unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
	useTimings(): boolean;
}

export default class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}

}

