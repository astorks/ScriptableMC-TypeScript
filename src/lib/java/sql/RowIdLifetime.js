export default class RowIdLifetime {
    static get $javaClass() {
        return Java.type('java.sql.RowIdLifetime');
    }
    static get ROWID_UNSUPPORTED() {
        return this.$javaClass.ROWID_UNSUPPORTED;
    }
    static get ROWID_VALID_OTHER() {
        return this.$javaClass.ROWID_VALID_OTHER;
    }
    static get ROWID_VALID_SESSION() {
        return this.$javaClass.ROWID_VALID_SESSION;
    }
    static get ROWID_VALID_TRANSACTION() {
        return this.$javaClass.ROWID_VALID_TRANSACTION;
    }
    static get ROWID_VALID_FOREVER() {
        return this.$javaClass.ROWID_VALID_FOREVER;
    }
}
