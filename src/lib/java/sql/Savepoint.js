export class Savepoint {
    static get $javaClass() {
        return Java.type('java.sql.Savepoint');
    }
}
