export default class Timestamp {
    static get $javaClass() {
        return Java.type('java.sql.Timestamp');
    }
    constructor(...args) {
        return new Timestamp.$javaClass(...args);
    }
    static from(...args) {
        return Timestamp.$javaClass.from(...args);
    }
    static valueOf(...args) {
        return Timestamp.$javaClass.valueOf(...args);
    }
    static UTC(...args) {
        return Timestamp.$javaClass.UTC(...args);
    }
    static parse(...args) {
        return Timestamp.$javaClass.parse(...args);
    }
}
