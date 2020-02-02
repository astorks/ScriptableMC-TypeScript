export default interface Cancellable {
    isCancelled(): boolean;
    setCancelled(arg0: boolean): void;
}
export default class Cancellable {
    static get $javaClass(): any;
}
