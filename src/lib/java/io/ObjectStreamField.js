export default class ObjectStreamField {
    static get $javaClass() {
        return Java.type('java.io.ObjectStreamField');
    }
    constructor(...args) {
        return new ObjectStreamField.$javaClass(...args);
    }
}
