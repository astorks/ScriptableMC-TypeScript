export default class Date {
    static get $javaClass() {
        return Java.type('java.sql.Date');
    }
    constructor(...args) {
        return new Date.$javaClass(...args);
    }
    static valueOf(...args) {
        return Date.$javaClass.valueOf(...args);
    }
    static from(...args) {
        return Date.$javaClass.from(...args);
    }
    static UTC(...args) {
        return Date.$javaClass.UTC(...args);
    }
    static parse(...args) {
        return Date.$javaClass.parse(...args);
    }
}
