export interface EventPriority {
    getSlot(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class EventPriority {
    static get $javaClass(): any;
    static get LOWEST(): EventPriority;
    static get LOW(): EventPriority;
    static get NORMAL(): EventPriority;
    static get HIGH(): EventPriority;
    static get HIGHEST(): EventPriority;
    static get MONITOR(): EventPriority;
}
