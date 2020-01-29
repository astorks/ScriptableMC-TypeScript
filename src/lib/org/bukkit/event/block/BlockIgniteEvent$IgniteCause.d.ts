export interface BlockIgniteEvent$IgniteCause {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class BlockIgniteEvent$IgniteCause {
    static get $javaClass(): any;
    static get LAVA(): BlockIgniteEvent$IgniteCause;
    static get FLINT_AND_STEEL(): BlockIgniteEvent$IgniteCause;
    static get SPREAD(): BlockIgniteEvent$IgniteCause;
    static get LIGHTNING(): BlockIgniteEvent$IgniteCause;
    static get FIREBALL(): BlockIgniteEvent$IgniteCause;
    static get ENDER_CRYSTAL(): BlockIgniteEvent$IgniteCause;
    static get EXPLOSION(): BlockIgniteEvent$IgniteCause;
    static get ARROW(): BlockIgniteEvent$IgniteCause;
}
