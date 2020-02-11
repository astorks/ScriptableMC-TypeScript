export default interface PlayerResourcePackStatusEvent$Status {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PlayerResourcePackStatusEvent$Status {
    static get $javaClass(): any;
    static get SUCCESSFULLY_LOADED(): PlayerResourcePackStatusEvent$Status;
    static get DECLINED(): PlayerResourcePackStatusEvent$Status;
    static get FAILED_DOWNLOAD(): PlayerResourcePackStatusEvent$Status;
    static get ACCEPTED(): PlayerResourcePackStatusEvent$Status;
}