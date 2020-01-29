export interface PlayerPreLoginEvent$Result {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class PlayerPreLoginEvent$Result {
    static get $javaClass(): any;
    static get ALLOWED(): PlayerPreLoginEvent$Result;
    static get KICK_FULL(): PlayerPreLoginEvent$Result;
    static get KICK_BANNED(): PlayerPreLoginEvent$Result;
    static get KICK_WHITELIST(): PlayerPreLoginEvent$Result;
    static get KICK_OTHER(): PlayerPreLoginEvent$Result;
}
