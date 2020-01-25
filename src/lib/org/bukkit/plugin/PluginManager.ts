declare var Java: any;
import {Listener} from '../../../org/bukkit/event/Listener.js'
import {EventPriority} from '../../../org/bukkit/event/EventPriority.js'
import {EventExecutor} from '../../../org/bukkit/plugin/EventExecutor.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {Permissible} from '../../../org/bukkit/permissions/Permissible.js'
import {Event} from '../../../org/bukkit/event/Event.js'

export interface PluginManager {
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
	registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
	getPlugin(arg0: string): Plugin;
	loadPlugin(arg0: any): Plugin;
	enablePlugin(arg0: Plugin): void;
	disablePlugin(arg0: Plugin): void;
	getPermissionSubscriptions(arg0: string): any;
	disablePlugins(): void;
	registerInterface(arg0: any): void;
	registerEvents(arg0: Listener, arg1: Plugin): void;
	addPermission(arg0: Permission): void;
	removePermission(arg0: Permission): void;
	removePermission(arg0: string): void;
	getDefaultPermissions(arg0: boolean): any;
	recalculatePermissionDefaults(arg0: Permission): void;
	subscribeToPermission(arg0: string, arg1: Permissible): void;
	unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
	subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
	unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
	getDefaultPermSubscriptions(arg0: boolean): any;
	useTimings(): boolean;
	isPluginEnabled(arg0: Plugin): boolean;
	isPluginEnabled(arg0: string): boolean;
	loadPlugins(arg0: any): Array<Plugin>;
	getPlugins(): Array<Plugin>;
	clearPlugins(): void;
	callEvent(arg0: Event): void;
	getPermissions(): any;
	getPermission(arg0: string): Permission;
}

export class PluginManager {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginManager');
	}
}

