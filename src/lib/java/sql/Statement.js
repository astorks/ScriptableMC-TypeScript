export default class Statement {
    static get $javaClass() {
        return Java.type('java.sql.Statement');
    }
    static get CLOSE_CURRENT_RESULT() {
        return Statement.$javaClass.CLOSE_CURRENT_RESULT;
    }
    static get KEEP_CURRENT_RESULT() {
        return Statement.$javaClass.KEEP_CURRENT_RESULT;
    }
    static get CLOSE_ALL_RESULTS() {
        return Statement.$javaClass.CLOSE_ALL_RESULTS;
    }
    static get SUCCESS_NO_INFO() {
        return Statement.$javaClass.SUCCESS_NO_INFO;
    }
    static get EXECUTE_FAILED() {
        return Statement.$javaClass.EXECUTE_FAILED;
    }
    static get RETURN_GENERATED_KEYS() {
        return Statement.$javaClass.RETURN_GENERATED_KEYS;
    }
    static get NO_GENERATED_KEYS() {
        return Statement.$javaClass.NO_GENERATED_KEYS;
    }
}
