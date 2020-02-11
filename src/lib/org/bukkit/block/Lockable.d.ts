export default interface Lockable {
    isLocked(): boolean;
    setLock(arg0: string): void;
    getLock(): string;
}
export default class Lockable {
    static get $javaClass(): any;
}
