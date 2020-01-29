export class CallableStatement {
    static get $javaClass() {
        return Java.type('java.sql.CallableStatement');
    }
    static get CLOSE_CURRENT_RESULT() {
        return CallableStatement.$javaClass.CLOSE_CURRENT_RESULT;
    }
    static get KEEP_CURRENT_RESULT() {
        return CallableStatement.$javaClass.KEEP_CURRENT_RESULT;
    }
    static get CLOSE_ALL_RESULTS() {
        return CallableStatement.$javaClass.CLOSE_ALL_RESULTS;
    }
    static get SUCCESS_NO_INFO() {
        return CallableStatement.$javaClass.SUCCESS_NO_INFO;
    }
    static get EXECUTE_FAILED() {
        return CallableStatement.$javaClass.EXECUTE_FAILED;
    }
    static get RETURN_GENERATED_KEYS() {
        return CallableStatement.$javaClass.RETURN_GENERATED_KEYS;
    }
    static get NO_GENERATED_KEYS() {
        return CallableStatement.$javaClass.NO_GENERATED_KEYS;
    }
}
