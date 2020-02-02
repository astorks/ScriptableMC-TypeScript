import Event from '../../../org/bukkit/event/Event.js';
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js';
import EventPriority from '../../../org/bukkit/event/EventPriority.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginManager {
    getPermissions(): any;
    getPermission(arg0: string): Permission;
    loadPlugin(arg0: any): Plugin;
    enablePlugin(arg0: Plugin): void;
    disablePlugin(arg0: Plugin): void;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
    getPlugin(arg0: string): Plugin;
    getPermissionSubscriptions(arg0: string): any;
    getDefaultPermSubscriptions(arg0: boolean): any;
    subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
    unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
    subscribeToPermission(arg0: string, arg1: Permissible): void;
    recalculatePermissionDefaults(arg0: Permission): void;
    getDefaultPermissions(arg0: boolean): any;
    unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
    loadPlugins(arg0: any): Array<Plugin>;
    addPermission(arg0: Permission): void;
    disablePlugins(): void;
    getPlugins(): Array<Plugin>;
    clearPlugins(): void;
    callEvent(arg0: Event): void;
    registerInterface(arg0: any): void;
    removePermission(arg0: string): void;
    removePermission(arg0: Permission): void;
    registerEvents(arg0: Listener, arg1: Plugin): void;
    isPluginEnabled(arg0: Plugin): boolean;
    isPluginEnabled(arg0: string): boolean;
    useTimings(): boolean;
}
export default class PluginManager {
    static get $javaClass(): any;
}
