export default class SQLWarning {
    static get $javaClass() {
        return Java.type('java.sql.SQLWarning');
    }
    constructor(...args) {
        return new SQLWarning.$javaClass(...args);
    }
}
