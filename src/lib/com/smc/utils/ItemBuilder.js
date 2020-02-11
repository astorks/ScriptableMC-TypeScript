export default class ItemBuilder {
    static get $javaClass() {
        return Java.type('com.smc.utils.ItemBuilder');
    }
    constructor(...args) {
        return new ItemBuilder.$javaClass(...args);
    }
}
