export default class Struct {
    static get $javaClass() {
        return Java.type('java.sql.Struct');
    }
}
