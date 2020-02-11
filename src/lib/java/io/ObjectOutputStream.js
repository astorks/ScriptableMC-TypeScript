export default class ObjectOutputStream {
    static get $javaClass() {
        return Java.type('java.io.ObjectOutputStream');
    }
    constructor(...args) {
        return new ObjectOutputStream.$javaClass(...args);
    }
    static get STREAM_MAGIC() {
        return ObjectOutputStream.$javaClass.STREAM_MAGIC;
    }
    static get STREAM_VERSION() {
        return ObjectOutputStream.$javaClass.STREAM_VERSION;
    }
    static get TC_BASE() {
        return ObjectOutputStream.$javaClass.TC_BASE;
    }
    static get TC_NULL() {
        return ObjectOutputStream.$javaClass.TC_NULL;
    }
    static get TC_REFERENCE() {
        return ObjectOutputStream.$javaClass.TC_REFERENCE;
    }
    static get TC_CLASSDESC() {
        return ObjectOutputStream.$javaClass.TC_CLASSDESC;
    }
    static get TC_OBJECT() {
        return ObjectOutputStream.$javaClass.TC_OBJECT;
    }
    static get TC_STRING() {
        return ObjectOutputStream.$javaClass.TC_STRING;
    }
    static get TC_ARRAY() {
        return ObjectOutputStream.$javaClass.TC_ARRAY;
    }
    static get TC_CLASS() {
        return ObjectOutputStream.$javaClass.TC_CLASS;
    }
    static get TC_BLOCKDATA() {
        return ObjectOutputStream.$javaClass.TC_BLOCKDATA;
    }
    static get TC_ENDBLOCKDATA() {
        return ObjectOutputStream.$javaClass.TC_ENDBLOCKDATA;
    }
    static get TC_RESET() {
        return ObjectOutputStream.$javaClass.TC_RESET;
    }
    static get TC_BLOCKDATALONG() {
        return ObjectOutputStream.$javaClass.TC_BLOCKDATALONG;
    }
    static get TC_EXCEPTION() {
        return ObjectOutputStream.$javaClass.TC_EXCEPTION;
    }
    static get TC_LONGSTRING() {
        return ObjectOutputStream.$javaClass.TC_LONGSTRING;
    }
    static get TC_PROXYCLASSDESC() {
        return ObjectOutputStream.$javaClass.TC_PROXYCLASSDESC;
    }
    static get TC_ENUM() {
        return ObjectOutputStream.$javaClass.TC_ENUM;
    }
    static get TC_MAX() {
        return ObjectOutputStream.$javaClass.TC_MAX;
    }
    static get baseWireHandle() {
        return ObjectOutputStream.$javaClass.baseWireHandle;
    }
    static get SC_WRITE_METHOD() {
        return ObjectOutputStream.$javaClass.SC_WRITE_METHOD;
    }
    static get SC_BLOCK_DATA() {
        return ObjectOutputStream.$javaClass.SC_BLOCK_DATA;
    }
    static get SC_SERIALIZABLE() {
        return ObjectOutputStream.$javaClass.SC_SERIALIZABLE;
    }
    static get SC_EXTERNALIZABLE() {
        return ObjectOutputStream.$javaClass.SC_EXTERNALIZABLE;
    }
    static get SC_ENUM() {
        return ObjectOutputStream.$javaClass.SC_ENUM;
    }
    static get SUBSTITUTION_PERMISSION() {
        return ObjectOutputStream.$javaClass.SUBSTITUTION_PERMISSION;
    }
    static get SUBCLASS_IMPLEMENTATION_PERMISSION() {
        return ObjectOutputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
    }
    static get SERIAL_FILTER_PERMISSION() {
        return ObjectOutputStream.$javaClass.SERIAL_FILTER_PERMISSION;
    }
    static get PROTOCOL_VERSION_1() {
        return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_1;
    }
    static get PROTOCOL_VERSION_2() {
        return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_2;
    }
    static nullOutputStream(...args) {
        return ObjectOutputStream.$javaClass.nullOutputStream(...args);
    }
}
