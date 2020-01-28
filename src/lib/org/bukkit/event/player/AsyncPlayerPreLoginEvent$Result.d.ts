export interface AsyncPlayerPreLoginEvent$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class AsyncPlayerPreLoginEvent$Result {
    static get $javaClass(): any;
    static get ALLOWED(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_FULL(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_BANNED(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_WHITELIST(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_OTHER(): AsyncPlayerPreLoginEvent$Result;
}
