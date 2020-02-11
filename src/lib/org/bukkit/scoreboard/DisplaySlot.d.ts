export default interface DisplaySlot {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class DisplaySlot {
    static get $javaClass(): any;
    static get BELOW_NAME(): DisplaySlot;
    static get PLAYER_LIST(): DisplaySlot;
    static get SIDEBAR(): DisplaySlot;
}
