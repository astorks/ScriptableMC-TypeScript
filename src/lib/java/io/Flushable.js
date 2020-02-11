export default class Flushable {
    static get $javaClass() {
        return Java.type('java.io.Flushable');
    }
}
