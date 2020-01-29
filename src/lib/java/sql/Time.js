export class Time {
    static get $javaClass() {
        return Java.type('java.sql.Time');
    }
    constructor(...args) {
        return new Time.$javaClass(...args);
    }
    static valueOf(...args) {
        return Time.$javaClass.valueOf(...args);
    }
    static parse(...args) {
        return Time.$javaClass.parse(...args);
    }
    static from(...args) {
        return Time.$javaClass.from(...args);
    }
    static UTC(...args) {
        return Time.$javaClass.UTC(...args);
    }
}
