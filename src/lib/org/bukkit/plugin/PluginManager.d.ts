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
    disablePlugin(arg0: Plugin): void;
    enablePlugin(arg0: Plugin): void;
    loadPlugin(arg0: File): Plugin;
    getPlugin(arg0: string): Plugin;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
    getPermissionSubscriptions(arg0: string): any;
    getDefaultPermSubscriptions(arg0: boolean): any;
    unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
    getDefaultPermissions(arg0: boolean): any;
    subscribeToPermission(arg0: string, arg1: Permissible): void;
    recalculatePermissionDefaults(arg0: Permission): void;
    unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
    subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
    getPlugins(): Array<Plugin>;
    disablePlugins(): void;
    registerEvents(arg0: Listener, arg1: Plugin): void;
    removePermission(arg0: string): void;
    removePermission(arg0: Permission): void;
    registerInterface(arg0: any): void;
    isPluginEnabled(arg0: string): boolean;
    isPluginEnabled(arg0: Plugin): boolean;
    useTimings(): boolean;
    addPermission(arg0: Permission): void;
    clearPlugins(): void;
    callEvent(arg0: Event): void;
    loadPlugins(arg0: File): Array<Plugin>;
}
export default class PluginManager {
    static get $javaClass(): any;
}
