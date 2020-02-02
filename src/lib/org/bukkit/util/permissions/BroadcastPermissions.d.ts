import Permission from '../../../../org/bukkit/permissions/Permission.js';
export default interface BroadcastPermissions {
}
export default class BroadcastPermissions {
    static get $javaClass(): any;
    static registerPermissions(parent: Permission): Permission;
}
