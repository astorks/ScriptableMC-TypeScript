export default class SerializablePermission {
    static get $javaClass() {
        return Java.type('java.io.SerializablePermission');
    }
    constructor(...args) {
        return new SerializablePermission.$javaClass(...args);
    }
}
