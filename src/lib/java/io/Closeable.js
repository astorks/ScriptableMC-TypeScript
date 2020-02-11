export default class Closeable {
    static get $javaClass() {
        return Java.type('java.io.Closeable');
    }
}
