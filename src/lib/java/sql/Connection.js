export class Connection {
    static get $javaClass() {
        return Java.type('java.sql.Connection');
    }
    static get TRANSACTION_NONE() {
        return Connection.$javaClass.TRANSACTION_NONE;
    }
    static get TRANSACTION_READ_UNCOMMITTED() {
        return Connection.$javaClass.TRANSACTION_READ_UNCOMMITTED;
    }
    static get TRANSACTION_READ_COMMITTED() {
        return Connection.$javaClass.TRANSACTION_READ_COMMITTED;
    }
    static get TRANSACTION_REPEATABLE_READ() {
        return Connection.$javaClass.TRANSACTION_REPEATABLE_READ;
    }
    static get TRANSACTION_SERIALIZABLE() {
        return Connection.$javaClass.TRANSACTION_SERIALIZABLE;
    }
}
