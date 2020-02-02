export default interface SkullType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class SkullType {
    static get $javaClass(): any;
    static get SKELETON(): SkullType;
    static get WITHER(): SkullType;
    static get ZOMBIE(): SkullType;
    static get PLAYER(): SkullType;
    static get CREEPER(): SkullType;
    static get DRAGON(): SkullType;
}
