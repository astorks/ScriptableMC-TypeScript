export default class Writer {
    static get $javaClass() {
        return Java.type('java.io.Writer');
    }
    static nullWriter(...args) {
        return Writer.$javaClass.nullWriter(...args);
    }
}
