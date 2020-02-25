declare var Java: any;
import SerializablePermission from '../../java/io/SerializablePermission.js'

export default class ObjectStreamConstants {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamConstants');
	}

	public static get PROTOCOL_VERSION_1(): number {
		return ObjectStreamConstants.$javaClass.PROTOCOL_VERSION_1;
	}

	public static get PROTOCOL_VERSION_2(): number {
		return ObjectStreamConstants.$javaClass.PROTOCOL_VERSION_2;
	}

	public static get SC_BLOCK_DATA(): number {
		return ObjectStreamConstants.$javaClass.SC_BLOCK_DATA;
	}

	public static get SC_ENUM(): number {
		return ObjectStreamConstants.$javaClass.SC_ENUM;
	}

	public static get SC_EXTERNALIZABLE(): number {
		return ObjectStreamConstants.$javaClass.SC_EXTERNALIZABLE;
	}

	public static get SC_SERIALIZABLE(): number {
		return ObjectStreamConstants.$javaClass.SC_SERIALIZABLE;
	}

	public static get SC_WRITE_METHOD(): number {
		return ObjectStreamConstants.$javaClass.SC_WRITE_METHOD;
	}

	public static get SERIAL_FILTER_PERMISSION(): SerializablePermission {
		return ObjectStreamConstants.$javaClass.SERIAL_FILTER_PERMISSION;
	}

	public static get STREAM_MAGIC(): number {
		return ObjectStreamConstants.$javaClass.STREAM_MAGIC;
	}

	public static get STREAM_VERSION(): number {
		return ObjectStreamConstants.$javaClass.STREAM_VERSION;
	}

	public static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission {
		return ObjectStreamConstants.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
	}

	public static get SUBSTITUTION_PERMISSION(): SerializablePermission {
		return ObjectStreamConstants.$javaClass.SUBSTITUTION_PERMISSION;
	}

	public static get TC_ARRAY(): number {
		return ObjectStreamConstants.$javaClass.TC_ARRAY;
	}

	public static get TC_BASE(): number {
		return ObjectStreamConstants.$javaClass.TC_BASE;
	}

	public static get TC_BLOCKDATA(): number {
		return ObjectStreamConstants.$javaClass.TC_BLOCKDATA;
	}

	public static get TC_BLOCKDATALONG(): number {
		return ObjectStreamConstants.$javaClass.TC_BLOCKDATALONG;
	}

	public static get TC_CLASS(): number {
		return ObjectStreamConstants.$javaClass.TC_CLASS;
	}

	public static get TC_CLASSDESC(): number {
		return ObjectStreamConstants.$javaClass.TC_CLASSDESC;
	}

	public static get TC_ENDBLOCKDATA(): number {
		return ObjectStreamConstants.$javaClass.TC_ENDBLOCKDATA;
	}

	public static get TC_ENUM(): number {
		return ObjectStreamConstants.$javaClass.TC_ENUM;
	}

	public static get TC_EXCEPTION(): number {
		return ObjectStreamConstants.$javaClass.TC_EXCEPTION;
	}

	public static get TC_LONGSTRING(): number {
		return ObjectStreamConstants.$javaClass.TC_LONGSTRING;
	}

	public static get TC_MAX(): number {
		return ObjectStreamConstants.$javaClass.TC_MAX;
	}

	public static get TC_NULL(): number {
		return ObjectStreamConstants.$javaClass.TC_NULL;
	}

	public static get TC_OBJECT(): number {
		return ObjectStreamConstants.$javaClass.TC_OBJECT;
	}

	public static get TC_PROXYCLASSDESC(): number {
		return ObjectStreamConstants.$javaClass.TC_PROXYCLASSDESC;
	}

	public static get TC_REFERENCE(): number {
		return ObjectStreamConstants.$javaClass.TC_REFERENCE;
	}

	public static get TC_RESET(): number {
		return ObjectStreamConstants.$javaClass.TC_RESET;
	}

	public static get TC_STRING(): number {
		return ObjectStreamConstants.$javaClass.TC_STRING;
	}

	public static get baseWireHandle(): number {
		return ObjectStreamConstants.$javaClass.baseWireHandle;
	}

}

