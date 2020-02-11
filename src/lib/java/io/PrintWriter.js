export default class PrintWriter {
    static get $javaClass() {
        return Java.type('java.io.PrintWriter');
    }
    constructor(...args) {
        return new PrintWriter.$javaClass(...args);
    }
    static nullWriter(...args) {
        return PrintWriter.$javaClass.nullWriter(...args);
    }
}
