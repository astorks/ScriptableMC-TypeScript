export default interface InventoryListener {
    accept(t: any): void;
    getType(): any;
}
export default class InventoryListener {
    static get $javaClass(): any;
    constructor(type: any, consumer: any);
}
