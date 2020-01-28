export interface GameMode {
    getValue(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class GameMode {
    static get $javaClass(): any;
    static get CREATIVE(): GameMode;
    static get SURVIVAL(): GameMode;
    static get ADVENTURE(): GameMode;
    static get SPECTATOR(): GameMode;
}
