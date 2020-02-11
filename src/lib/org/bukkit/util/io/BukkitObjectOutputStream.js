export default class BukkitObjectOutputStream {
    static get $javaClass() {
        return Java.type('org.bukkit.util.io.BukkitObjectOutputStream');
    }
    constructor(...args) {
        return new BukkitObjectOutputStream.$javaClass(...args);
    }
    static get STREAM_MAGIC() {
        return BukkitObjectOutputStream.$javaClass.STREAM_MAGIC;
    }
    static get STREAM_VERSION() {
        return BukkitObjectOutputStream.$javaClass.STREAM_VERSION;
    }
    static get TC_BASE() {
        return BukkitObjectOutputStream.$javaClass.TC_BASE;
    }
    static get TC_NULL() {
        return BukkitObjectOutputStream.$javaClass.TC_NULL;
    }
    static get TC_REFERENCE() {
        return BukkitObjectOutputStream.$javaClass.TC_REFERENCE;
    }
    static get TC_CLASSDESC() {
        return BukkitObjectOutputStream.$javaClass.TC_CLASSDESC;
    }
    static get TC_OBJECT() {
        return BukkitObjectOutputStream.$javaClass.TC_OBJECT;
    }
    static get TC_STRING() {
        return BukkitObjectOutputStream.$javaClass.TC_STRING;
    }
    static get TC_ARRAY() {
        return BukkitObjectOutputStream.$javaClass.TC_ARRAY;
    }
    static get TC_CLASS() {
        return BukkitObjectOutputStream.$javaClass.TC_CLASS;
    }
    static get TC_BLOCKDATA() {
        return BukkitObjectOutputStream.$javaClass.TC_BLOCKDATA;
    }
    static get TC_ENDBLOCKDATA() {
        return BukkitObjectOutputStream.$javaClass.TC_ENDBLOCKDATA;
    }
    static get TC_RESET() {
        return BukkitObjectOutputStream.$javaClass.TC_RESET;
    }
    static get TC_BLOCKDATALONG() {
        return BukkitObjectOutputStream.$javaClass.TC_BLOCKDATALONG;
    }
    static get TC_EXCEPTION() {
        return BukkitObjectOutputStream.$javaClass.TC_EXCEPTION;
    }
    static get TC_LONGSTRING() {
        return BukkitObjectOutputStream.$javaClass.TC_LONGSTRING;
    }
    static get TC_PROXYCLASSDESC() {
        return BukkitObjectOutputStream.$javaClass.TC_PROXYCLASSDESC;
    }
    static get TC_ENUM() {
        return BukkitObjectOutputStream.$javaClass.TC_ENUM;
    }
    static get TC_MAX() {
        return BukkitObjectOutputStream.$javaClass.TC_MAX;
    }
    static get baseWireHandle() {
        return BukkitObjectOutputStream.$javaClass.baseWireHandle;
    }
    static get SC_WRITE_METHOD() {
        return BukkitObjectOutputStream.$javaClass.SC_WRITE_METHOD;
    }
    static get SC_BLOCK_DATA() {
        return BukkitObjectOutputStream.$javaClass.SC_BLOCK_DATA;
    }
    static get SC_SERIALIZABLE() {
        return BukkitObjectOutputStream.$javaClass.SC_SERIALIZABLE;
    }
    static get SC_EXTERNALIZABLE() {
        return BukkitObjectOutputStream.$javaClass.SC_EXTERNALIZABLE;
    }
    static get SC_ENUM() {
        return BukkitObjectOutputStream.$javaClass.SC_ENUM;
    }
    static get SUBSTITUTION_PERMISSION() {
        return BukkitObjectOutputStream.$javaClass.SUBSTITUTION_PERMISSION;
    }
    static get SUBCLASS_IMPLEMENTATION_PERMISSION() {
        return BukkitObjectOutputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
    }
    static get SERIAL_FILTER_PERMISSION() {
        return BukkitObjectOutputStream.$javaClass.SERIAL_FILTER_PERMISSION;
    }
    static get PROTOCOL_VERSION_1() {
        return BukkitObjectOutputStream.$javaClass.PROTOCOL_VERSION_1;
    }
    static get PROTOCOL_VERSION_2() {
        return BukkitObjectOutputStream.$javaClass.PROTOCOL_VERSION_2;
    }
    static nullOutputStream(...args) {
        return BukkitObjectOutputStream.$javaClass.nullOutputStream(...args);
    }
}
