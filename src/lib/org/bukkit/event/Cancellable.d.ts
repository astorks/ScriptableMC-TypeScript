export default interface Cancellable {
    setCancelled(arg0: boolean): void;
    isCancelled(): boolean;
}
export default class Cancellable {
    static get $javaClass(): any;
}
