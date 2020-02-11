export default class BukkitObjectInputStream {
    static get $javaClass() {
        return Java.type('org.bukkit.util.io.BukkitObjectInputStream');
    }
    constructor(...args) {
        return new BukkitObjectInputStream.$javaClass(...args);
    }
    static get STREAM_MAGIC() {
        return BukkitObjectInputStream.$javaClass.STREAM_MAGIC;
    }
    static get STREAM_VERSION() {
        return BukkitObjectInputStream.$javaClass.STREAM_VERSION;
    }
    static get TC_BASE() {
        return BukkitObjectInputStream.$javaClass.TC_BASE;
    }
    static get TC_NULL() {
        return BukkitObjectInputStream.$javaClass.TC_NULL;
    }
    static get TC_REFERENCE() {
        return BukkitObjectInputStream.$javaClass.TC_REFERENCE;
    }
    static get TC_CLASSDESC() {
        return BukkitObjectInputStream.$javaClass.TC_CLASSDESC;
    }
    static get TC_OBJECT() {
        return BukkitObjectInputStream.$javaClass.TC_OBJECT;
    }
    static get TC_STRING() {
        return BukkitObjectInputStream.$javaClass.TC_STRING;
    }
    static get TC_ARRAY() {
        return BukkitObjectInputStream.$javaClass.TC_ARRAY;
    }
    static get TC_CLASS() {
        return BukkitObjectInputStream.$javaClass.TC_CLASS;
    }
    static get TC_BLOCKDATA() {
        return BukkitObjectInputStream.$javaClass.TC_BLOCKDATA;
    }
    static get TC_ENDBLOCKDATA() {
        return BukkitObjectInputStream.$javaClass.TC_ENDBLOCKDATA;
    }
    static get TC_RESET() {
        return BukkitObjectInputStream.$javaClass.TC_RESET;
    }
    static get TC_BLOCKDATALONG() {
        return BukkitObjectInputStream.$javaClass.TC_BLOCKDATALONG;
    }
    static get TC_EXCEPTION() {
        return BukkitObjectInputStream.$javaClass.TC_EXCEPTION;
    }
    static get TC_LONGSTRING() {
        return BukkitObjectInputStream.$javaClass.TC_LONGSTRING;
    }
    static get TC_PROXYCLASSDESC() {
        return BukkitObjectInputStream.$javaClass.TC_PROXYCLASSDESC;
    }
    static get TC_ENUM() {
        return BukkitObjectInputStream.$javaClass.TC_ENUM;
    }
    static get TC_MAX() {
        return BukkitObjectInputStream.$javaClass.TC_MAX;
    }
    static get baseWireHandle() {
        return BukkitObjectInputStream.$javaClass.baseWireHandle;
    }
    static get SC_WRITE_METHOD() {
        return BukkitObjectInputStream.$javaClass.SC_WRITE_METHOD;
    }
    static get SC_BLOCK_DATA() {
        return BukkitObjectInputStream.$javaClass.SC_BLOCK_DATA;
    }
    static get SC_SERIALIZABLE() {
        return BukkitObjectInputStream.$javaClass.SC_SERIALIZABLE;
    }
    static get SC_EXTERNALIZABLE() {
        return BukkitObjectInputStream.$javaClass.SC_EXTERNALIZABLE;
    }
    static get SC_ENUM() {
        return BukkitObjectInputStream.$javaClass.SC_ENUM;
    }
    static get SUBSTITUTION_PERMISSION() {
        return BukkitObjectInputStream.$javaClass.SUBSTITUTION_PERMISSION;
    }
    static get SUBCLASS_IMPLEMENTATION_PERMISSION() {
        return BukkitObjectInputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
    }
    static get SERIAL_FILTER_PERMISSION() {
        return BukkitObjectInputStream.$javaClass.SERIAL_FILTER_PERMISSION;
    }
    static get PROTOCOL_VERSION_1() {
        return BukkitObjectInputStream.$javaClass.PROTOCOL_VERSION_1;
    }
    static get PROTOCOL_VERSION_2() {
        return BukkitObjectInputStream.$javaClass.PROTOCOL_VERSION_2;
    }
    static nullInputStream(...args) {
        return BukkitObjectInputStream.$javaClass.nullInputStream(...args);
    }
}
