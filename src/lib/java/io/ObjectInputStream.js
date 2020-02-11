export default class ObjectInputStream {
    static get $javaClass() {
        return Java.type('java.io.ObjectInputStream');
    }
    constructor(...args) {
        return new ObjectInputStream.$javaClass(...args);
    }
    static get STREAM_MAGIC() {
        return ObjectInputStream.$javaClass.STREAM_MAGIC;
    }
    static get STREAM_VERSION() {
        return ObjectInputStream.$javaClass.STREAM_VERSION;
    }
    static get TC_BASE() {
        return ObjectInputStream.$javaClass.TC_BASE;
    }
    static get TC_NULL() {
        return ObjectInputStream.$javaClass.TC_NULL;
    }
    static get TC_REFERENCE() {
        return ObjectInputStream.$javaClass.TC_REFERENCE;
    }
    static get TC_CLASSDESC() {
        return ObjectInputStream.$javaClass.TC_CLASSDESC;
    }
    static get TC_OBJECT() {
        return ObjectInputStream.$javaClass.TC_OBJECT;
    }
    static get TC_STRING() {
        return ObjectInputStream.$javaClass.TC_STRING;
    }
    static get TC_ARRAY() {
        return ObjectInputStream.$javaClass.TC_ARRAY;
    }
    static get TC_CLASS() {
        return ObjectInputStream.$javaClass.TC_CLASS;
    }
    static get TC_BLOCKDATA() {
        return ObjectInputStream.$javaClass.TC_BLOCKDATA;
    }
    static get TC_ENDBLOCKDATA() {
        return ObjectInputStream.$javaClass.TC_ENDBLOCKDATA;
    }
    static get TC_RESET() {
        return ObjectInputStream.$javaClass.TC_RESET;
    }
    static get TC_BLOCKDATALONG() {
        return ObjectInputStream.$javaClass.TC_BLOCKDATALONG;
    }
    static get TC_EXCEPTION() {
        return ObjectInputStream.$javaClass.TC_EXCEPTION;
    }
    static get TC_LONGSTRING() {
        return ObjectInputStream.$javaClass.TC_LONGSTRING;
    }
    static get TC_PROXYCLASSDESC() {
        return ObjectInputStream.$javaClass.TC_PROXYCLASSDESC;
    }
    static get TC_ENUM() {
        return ObjectInputStream.$javaClass.TC_ENUM;
    }
    static get TC_MAX() {
        return ObjectInputStream.$javaClass.TC_MAX;
    }
    static get baseWireHandle() {
        return ObjectInputStream.$javaClass.baseWireHandle;
    }
    static get SC_WRITE_METHOD() {
        return ObjectInputStream.$javaClass.SC_WRITE_METHOD;
    }
    static get SC_BLOCK_DATA() {
        return ObjectInputStream.$javaClass.SC_BLOCK_DATA;
    }
    static get SC_SERIALIZABLE() {
        return ObjectInputStream.$javaClass.SC_SERIALIZABLE;
    }
    static get SC_EXTERNALIZABLE() {
        return ObjectInputStream.$javaClass.SC_EXTERNALIZABLE;
    }
    static get SC_ENUM() {
        return ObjectInputStream.$javaClass.SC_ENUM;
    }
    static get SUBSTITUTION_PERMISSION() {
        return ObjectInputStream.$javaClass.SUBSTITUTION_PERMISSION;
    }
    static get SUBCLASS_IMPLEMENTATION_PERMISSION() {
        return ObjectInputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
    }
    static get SERIAL_FILTER_PERMISSION() {
        return ObjectInputStream.$javaClass.SERIAL_FILTER_PERMISSION;
    }
    static get PROTOCOL_VERSION_1() {
        return ObjectInputStream.$javaClass.PROTOCOL_VERSION_1;
    }
    static get PROTOCOL_VERSION_2() {
        return ObjectInputStream.$javaClass.PROTOCOL_VERSION_2;
    }
    static nullInputStream(...args) {
        return ObjectInputStream.$javaClass.nullInputStream(...args);
    }
}
