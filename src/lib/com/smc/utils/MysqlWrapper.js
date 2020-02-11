export default class MysqlWrapper {
    static get $javaClass() {
        return Java.type('com.smc.utils.MysqlWrapper');
    }
    constructor(...args) {
        return new MysqlWrapper.$javaClass(...args);
    }
    static openConnectionAsync$default(...args) {
        return MysqlWrapper.$javaClass.openConnectionAsync$default(...args);
    }
}
