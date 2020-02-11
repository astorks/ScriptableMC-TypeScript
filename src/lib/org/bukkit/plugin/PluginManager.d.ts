import Event from '../../../org/bukkit/event/Event.js';
import EventExecutor from '../../../org/bukkit/plugin/EventExecutor.js';
import EventPriority from '../../../org/bukkit/event/EventPriority.js';
import File from '../../../java/io/File.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Permissible from '../../../org/bukkit/permissions/Permissible.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginManager {
    getPermissions(): any;
    getPermission(arg0: string): Permission;
    getPlugin(arg0: string): Plugin;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
    loadPlugin(arg0: File): Plugin;
    enablePlugin(arg0: Plugin): void;
    disablePlugin(arg0: Plugin): void;
    getPermissionSubscriptions(arg0: string): any;
    getDefaultPermissions(arg0: boolean): any;
    subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
    unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
    getDefaultPermSubscriptions(arg0: boolean): any;
    recalculatePermissionDefaults(arg0: Permission): void;
    subscribeToPermission(arg0: string, arg1: Permissible): void;
    unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
    registerInterface(arg0: any): void;
    getPlugins(): Array<Plugin>;
    clearPlugins(): void;
    callEvent(arg0: Event): void;
    isPluginEnabled(arg0: Plugin): boolean;
    isPluginEnabled(arg0: string): boolean;
    loadPlugins(arg0: File): Array<Plugin>;
    registerEvents(arg0: Listener, arg1: Plugin): void;
    useTimings(): boolean;
    removePermission(arg0: string): void;
    removePermission(arg0: Permission): void;
    disablePlugins(): void;
    addPermission(arg0: Permission): void;
}
export default class PluginManager {
    static get $javaClass(): any;
}
