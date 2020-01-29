export class SmartItemBuilder {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.smartinvs.SmartItemBuilder');
    }
    constructor(...args) {
        return new SmartItemBuilder.$javaClass(...args);
    }
}
