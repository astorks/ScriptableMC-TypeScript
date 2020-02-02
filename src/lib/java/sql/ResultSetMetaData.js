export default class ResultSetMetaData {
    static get $javaClass() {
        return Java.type('java.sql.ResultSetMetaData');
    }
    static get columnNoNulls() {
        return ResultSetMetaData.$javaClass.columnNoNulls;
    }
    static get columnNullable() {
        return ResultSetMetaData.$javaClass.columnNullable;
    }
    static get columnNullableUnknown() {
        return ResultSetMetaData.$javaClass.columnNullableUnknown;
    }
}
