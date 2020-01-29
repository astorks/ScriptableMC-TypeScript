import { Permission } from '../../../org/bukkit/permissions/Permission.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Listener } from '../../../org/bukkit/event/Listener.js';
import { EventPriority } from '../../../org/bukkit/event/EventPriority.js';
import { EventExecutor } from '../../../org/bukkit/plugin/EventExecutor.js';
import { Permissible } from '../../../org/bukkit/permissions/Permissible.js';
import { Event } from '../../../org/bukkit/event/Event.js';
export interface PluginManager {
    getPermissions(): any;
    getPermission(arg0: string): Permission;
    loadPlugin(arg0: any): Plugin;
    getPlugin(arg0: string): Plugin;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void;
    registerEvent(arg0: any, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void;
    enablePlugin(arg0: Plugin): void;
    disablePlugin(arg0: Plugin): void;
    getPermissionSubscriptions(arg0: string): any;
    recalculatePermissionDefaults(arg0: Permission): void;
    subscribeToPermission(arg0: string, arg1: Permissible): void;
    unsubscribeFromPermission(arg0: string, arg1: Permissible): void;
    getDefaultPermissions(arg0: boolean): any;
    subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void;
    unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void;
    getDefaultPermSubscriptions(arg0: boolean): any;
    registerInterface(arg0: any): void;
    getPlugins(): Array<Plugin>;
    loadPlugins(arg0: any): Array<Plugin>;
    disablePlugins(): void;
    clearPlugins(): void;
    callEvent(arg0: Event): void;
    registerEvents(arg0: Listener, arg1: Plugin): void;
    isPluginEnabled(arg0: Plugin): boolean;
    isPluginEnabled(arg0: string): boolean;
    addPermission(arg0: Permission): void;
    removePermission(arg0: Permission): void;
    removePermission(arg0: string): void;
    useTimings(): boolean;
}
export declare class PluginManager {
    static get $javaClass(): any;
}
