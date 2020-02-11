export default class Reader {
    static get $javaClass() {
        return Java.type('java.io.Reader');
    }
    static nullReader(...args) {
        return Reader.$javaClass.nullReader(...args);
    }
}
