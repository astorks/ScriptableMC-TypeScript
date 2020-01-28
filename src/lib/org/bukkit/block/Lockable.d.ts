export interface Lockable {
    isLocked(): boolean;
    getLock(): string;
    setLock(arg0: string): void;
}
export declare class Lockable {
    static get $javaClass(): any;
}
