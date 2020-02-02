export default interface PortalCreateEvent$CreateReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PortalCreateEvent$CreateReason {
    static get $javaClass(): any;
    static get FIRE(): PortalCreateEvent$CreateReason;
    static get NETHER_PAIR(): PortalCreateEvent$CreateReason;
    static get END_PLATFORM(): PortalCreateEvent$CreateReason;
}
