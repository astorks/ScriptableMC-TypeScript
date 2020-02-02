export default interface PlayerTeleportEvent$TeleportCause {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PlayerTeleportEvent$TeleportCause {
    static get $javaClass(): any;
    static get ENDER_PEARL(): PlayerTeleportEvent$TeleportCause;
    static get COMMAND(): PlayerTeleportEvent$TeleportCause;
    static get PLUGIN(): PlayerTeleportEvent$TeleportCause;
    static get NETHER_PORTAL(): PlayerTeleportEvent$TeleportCause;
    static get END_PORTAL(): PlayerTeleportEvent$TeleportCause;
    static get SPECTATE(): PlayerTeleportEvent$TeleportCause;
    static get END_GATEWAY(): PlayerTeleportEvent$TeleportCause;
    static get CHORUS_FRUIT(): PlayerTeleportEvent$TeleportCause;
    static get UNKNOWN(): PlayerTeleportEvent$TeleportCause;
}
