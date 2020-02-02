export default interface PermissionDefault {
    getValue(op: boolean): boolean;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PermissionDefault {
    static get $javaClass(): any;
    static get TRUE(): PermissionDefault;
    static get FALSE(): PermissionDefault;
    static get OP(): PermissionDefault;
    static get NOT_OP(): PermissionDefault;
}
