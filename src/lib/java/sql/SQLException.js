export default class SQLException {
    static get $javaClass() {
        return Java.type('java.sql.SQLException');
    }
    constructor(...args) {
        return new SQLException.$javaClass(...args);
    }
}
