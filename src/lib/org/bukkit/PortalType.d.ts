export default interface PortalType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PortalType {
    static get $javaClass(): any;
    static get NETHER(): PortalType;
    static get ENDER(): PortalType;
    static get CUSTOM(): PortalType;
}
