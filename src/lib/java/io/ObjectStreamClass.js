export default class ObjectStreamClass {
    static get $javaClass() {
        return Java.type('java.io.ObjectStreamClass');
    }
    static get NO_FIELDS() {
        return ObjectStreamClass.$javaClass.NO_FIELDS;
    }
    static lookup(...args) {
        return ObjectStreamClass.$javaClass.lookup(...args);
    }
    static lookupAny(...args) {
        return ObjectStreamClass.$javaClass.lookupAny(...args);
    }
}
