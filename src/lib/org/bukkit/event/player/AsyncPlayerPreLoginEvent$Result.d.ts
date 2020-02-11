export default interface AsyncPlayerPreLoginEvent$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class AsyncPlayerPreLoginEvent$Result {
    static get $javaClass(): any;
    static get ALLOWED(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_FULL(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_BANNED(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_WHITELIST(): AsyncPlayerPreLoginEvent$Result;
    static get KICK_OTHER(): AsyncPlayerPreLoginEvent$Result;
}
