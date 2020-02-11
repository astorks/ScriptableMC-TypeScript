import SerializablePermission from '../../java/io/SerializablePermission.js';
export default interface ObjectStreamConstants {
}
export default class ObjectStreamConstants {
    static get $javaClass(): any;
    static get STREAM_MAGIC(): number;
    static get STREAM_VERSION(): number;
    static get TC_BASE(): number;
    static get TC_NULL(): number;
    static get TC_REFERENCE(): number;
    static get TC_CLASSDESC(): number;
    static get TC_OBJECT(): number;
    static get TC_STRING(): number;
    static get TC_ARRAY(): number;
    static get TC_CLASS(): number;
    static get TC_BLOCKDATA(): number;
    static get TC_ENDBLOCKDATA(): number;
    static get TC_RESET(): number;
    static get TC_BLOCKDATALONG(): number;
    static get TC_EXCEPTION(): number;
    static get TC_LONGSTRING(): number;
    static get TC_PROXYCLASSDESC(): number;
    static get TC_ENUM(): number;
    static get TC_MAX(): number;
    static get baseWireHandle(): number;
    static get SC_WRITE_METHOD(): number;
    static get SC_BLOCK_DATA(): number;
    static get SC_SERIALIZABLE(): number;
    static get SC_EXTERNALIZABLE(): number;
    static get SC_ENUM(): number;
    static get SUBSTITUTION_PERMISSION(): SerializablePermission;
    static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission;
    static get SERIAL_FILTER_PERMISSION(): SerializablePermission;
    static get PROTOCOL_VERSION_1(): number;
    static get PROTOCOL_VERSION_2(): number;
}
