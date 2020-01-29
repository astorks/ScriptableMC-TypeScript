export class ResultSet {
    static get $javaClass() {
        return Java.type('java.sql.ResultSet');
    }
    static get FETCH_FORWARD() {
        return ResultSet.$javaClass.FETCH_FORWARD;
    }
    static get FETCH_REVERSE() {
        return ResultSet.$javaClass.FETCH_REVERSE;
    }
    static get FETCH_UNKNOWN() {
        return ResultSet.$javaClass.FETCH_UNKNOWN;
    }
    static get TYPE_FORWARD_ONLY() {
        return ResultSet.$javaClass.TYPE_FORWARD_ONLY;
    }
    static get TYPE_SCROLL_INSENSITIVE() {
        return ResultSet.$javaClass.TYPE_SCROLL_INSENSITIVE;
    }
    static get TYPE_SCROLL_SENSITIVE() {
        return ResultSet.$javaClass.TYPE_SCROLL_SENSITIVE;
    }
    static get CONCUR_READ_ONLY() {
        return ResultSet.$javaClass.CONCUR_READ_ONLY;
    }
    static get CONCUR_UPDATABLE() {
        return ResultSet.$javaClass.CONCUR_UPDATABLE;
    }
    static get HOLD_CURSORS_OVER_COMMIT() {
        return ResultSet.$javaClass.HOLD_CURSORS_OVER_COMMIT;
    }
    static get CLOSE_CURSORS_AT_COMMIT() {
        return ResultSet.$javaClass.CLOSE_CURSORS_AT_COMMIT;
    }
}
