export default interface ServicePriority {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class ServicePriority {
    static get $javaClass(): any;
    static get Lowest(): ServicePriority;
    static get Low(): ServicePriority;
    static get Normal(): ServicePriority;
    static get High(): ServicePriority;
    static get Highest(): ServicePriority;
}
