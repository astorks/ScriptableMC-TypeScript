export default interface ServerLoadEvent$LoadType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class ServerLoadEvent$LoadType {
    static get $javaClass(): any;
    static get STARTUP(): ServerLoadEvent$LoadType;
    static get RELOAD(): ServerLoadEvent$LoadType;
}
