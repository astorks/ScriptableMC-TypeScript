export interface ServicePriority {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class ServicePriority {
    static get $javaClass(): any;
    static get Lowest(): ServicePriority;
    static get Low(): ServicePriority;
    static get Normal(): ServicePriority;
    static get High(): ServicePriority;
    static get Highest(): ServicePriority;
}
