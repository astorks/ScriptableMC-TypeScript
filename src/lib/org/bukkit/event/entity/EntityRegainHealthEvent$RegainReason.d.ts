export default interface EntityRegainHealthEvent$RegainReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EntityRegainHealthEvent$RegainReason {
    static get $javaClass(): any;
    static get REGEN(): EntityRegainHealthEvent$RegainReason;
    static get SATIATED(): EntityRegainHealthEvent$RegainReason;
    static get EATING(): EntityRegainHealthEvent$RegainReason;
    static get ENDER_CRYSTAL(): EntityRegainHealthEvent$RegainReason;
    static get MAGIC(): EntityRegainHealthEvent$RegainReason;
    static get MAGIC_REGEN(): EntityRegainHealthEvent$RegainReason;
    static get WITHER_SPAWN(): EntityRegainHealthEvent$RegainReason;
    static get WITHER(): EntityRegainHealthEvent$RegainReason;
    static get CUSTOM(): EntityRegainHealthEvent$RegainReason;
}
