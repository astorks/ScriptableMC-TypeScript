export default class Clob {
    static get $javaClass() {
        return Java.type('java.sql.Clob');
    }
}
