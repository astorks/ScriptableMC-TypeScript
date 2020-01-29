export interface Lockable {
    isLocked(): boolean;
    setLock(arg0: string): void;
    getLock(): string;
}
export declare class Lockable {
    static get $javaClass(): any;
}
