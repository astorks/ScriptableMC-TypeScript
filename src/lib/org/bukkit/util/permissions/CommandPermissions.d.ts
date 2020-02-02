import Permission from '../../../../org/bukkit/permissions/Permission.js';
export default interface CommandPermissions {
}
export default class CommandPermissions {
    static get $javaClass(): any;
    static registerPermissions(parent: Permission): Permission;
}
