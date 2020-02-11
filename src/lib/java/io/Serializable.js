export default class Serializable {
    static get $javaClass() {
        return Java.type('java.io.Serializable');
    }
}
