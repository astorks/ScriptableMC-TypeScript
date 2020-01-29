export interface PlayerLoginEvent$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class PlayerLoginEvent$Result {
    static get $javaClass(): any;
    static get ALLOWED(): PlayerLoginEvent$Result;
    static get KICK_FULL(): PlayerLoginEvent$Result;
    static get KICK_BANNED(): PlayerLoginEvent$Result;
    static get KICK_WHITELIST(): PlayerLoginEvent$Result;
    static get KICK_OTHER(): PlayerLoginEvent$Result;
}
