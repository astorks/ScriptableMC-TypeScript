export default interface Pose {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Pose {
    static get $javaClass(): any;
    static get STANDING(): Pose;
    static get FALL_FLYING(): Pose;
    static get SLEEPING(): Pose;
    static get SWIMMING(): Pose;
    static get SPIN_ATTACK(): Pose;
    static get SNEAKING(): Pose;
    static get DYING(): Pose;
}
