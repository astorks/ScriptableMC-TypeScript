export default class OutputStream {
    static get $javaClass() {
        return Java.type('java.io.OutputStream');
    }
    constructor(...args) {
        return new OutputStream.$javaClass(...args);
    }
    static nullOutputStream(...args) {
        return OutputStream.$javaClass.nullOutputStream(...args);
    }
}
