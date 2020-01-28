export interface Difficulty {
    getValue(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Difficulty {
    static get $javaClass(): any;
    static get PEACEFUL(): Difficulty;
    static get EASY(): Difficulty;
    static get NORMAL(): Difficulty;
    static get HARD(): Difficulty;
}
