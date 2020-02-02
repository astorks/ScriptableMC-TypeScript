export default interface Lockable {
    isLocked(): boolean;
    getLock(): string;
    setLock(arg0: string): void;
}
export default class Lockable {
    static get $javaClass(): any;
}
