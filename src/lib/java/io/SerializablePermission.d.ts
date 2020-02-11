export default interface SerializablePermission {
    implies(p: any): boolean;
    getActions(): string;
    newPermissionCollection(): any;
    getName(): string;
    checkGuard(object: any): void;
}
export default class SerializablePermission {
    static get $javaClass(): any;
    constructor(_name: string);
    constructor(_name: string, actions: string);
}
