declare var Java: any;
import InputStream from '../../java/io/InputStream.js'
import ObjectInput from '../../java/io/ObjectInput.js'
import ObjectInputStream$GetField from '../../java/io/ObjectInputStream$GetField.js'
import ObjectInputValidation from '../../java/io/ObjectInputValidation.js'
import ObjectStreamConstants from '../../java/io/ObjectStreamConstants.js'
import SerializablePermission from '../../java/io/SerializablePermission.js'

export default interface ObjectInputStream extends InputStream {
	readLong(): number;
	readFloat(): number;
	readFully(arg0: Array<number>): void;
	readFully(arg0: Array<number>, arg1: number, arg2: number): void;
	readByte(): number;
	readUnshared(): any;
	registerValidation(arg0: ObjectInputValidation, arg1: number): void;
	readUnsignedShort(): number;
	skipBytes(arg0: number): number;
	readBoolean(): boolean;
	readUnsignedByte(): number;
	readShort(): number;
	readDouble(): number;
	readObject(): any;
	defaultReadObject(): void;
	read(arg0: Array<number>, arg1: number, arg2: number): number;
	read(): number;
	readLine(): string;
	close(): void;
	readInt(): number;
	readFields(): ObjectInputStream$GetField;
	available(): number;
	readChar(): string;
	readUTF(): string;
	read(arg0: Array<number>): number;
	mark(arg0: number): void;
	skip(arg0: number): number;
	markSupported(): boolean;
	reset(): void;
}

export default class ObjectInputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputStream');
	}
	constructor(arg0: InputStream);
	constructor(...args: any[]) {
		return new ObjectInputStream.$javaClass(...args);
	}
	public static get STREAM_MAGIC(): number {
		return ObjectInputStream.$javaClass.STREAM_MAGIC;
	}
	public static get STREAM_VERSION(): number {
		return ObjectInputStream.$javaClass.STREAM_VERSION;
	}
	public static get TC_BASE(): number {
		return ObjectInputStream.$javaClass.TC_BASE;
	}
	public static get TC_NULL(): number {
		return ObjectInputStream.$javaClass.TC_NULL;
	}
	public static get TC_REFERENCE(): number {
		return ObjectInputStream.$javaClass.TC_REFERENCE;
	}
	public static get TC_CLASSDESC(): number {
		return ObjectInputStream.$javaClass.TC_CLASSDESC;
	}
	public static get TC_OBJECT(): number {
		return ObjectInputStream.$javaClass.TC_OBJECT;
	}
	public static get TC_STRING(): number {
		return ObjectInputStream.$javaClass.TC_STRING;
	}
	public static get TC_ARRAY(): number {
		return ObjectInputStream.$javaClass.TC_ARRAY;
	}
	public static get TC_CLASS(): number {
		return ObjectInputStream.$javaClass.TC_CLASS;
	}
	public static get TC_BLOCKDATA(): number {
		return ObjectInputStream.$javaClass.TC_BLOCKDATA;
	}
	public static get TC_ENDBLOCKDATA(): number {
		return ObjectInputStream.$javaClass.TC_ENDBLOCKDATA;
	}
	public static get TC_RESET(): number {
		return ObjectInputStream.$javaClass.TC_RESET;
	}
	public static get TC_BLOCKDATALONG(): number {
		return ObjectInputStream.$javaClass.TC_BLOCKDATALONG;
	}
	public static get TC_EXCEPTION(): number {
		return ObjectInputStream.$javaClass.TC_EXCEPTION;
	}
	public static get TC_LONGSTRING(): number {
		return ObjectInputStream.$javaClass.TC_LONGSTRING;
	}
	public static get TC_PROXYCLASSDESC(): number {
		return ObjectInputStream.$javaClass.TC_PROXYCLASSDESC;
	}
	public static get TC_ENUM(): number {
		return ObjectInputStream.$javaClass.TC_ENUM;
	}
	public static get TC_MAX(): number {
		return ObjectInputStream.$javaClass.TC_MAX;
	}
	public static get baseWireHandle(): number {
		return ObjectInputStream.$javaClass.baseWireHandle;
	}
	public static get SC_WRITE_METHOD(): number {
		return ObjectInputStream.$javaClass.SC_WRITE_METHOD;
	}
	public static get SC_BLOCK_DATA(): number {
		return ObjectInputStream.$javaClass.SC_BLOCK_DATA;
	}
	public static get SC_SERIALIZABLE(): number {
		return ObjectInputStream.$javaClass.SC_SERIALIZABLE;
	}
	public static get SC_EXTERNALIZABLE(): number {
		return ObjectInputStream.$javaClass.SC_EXTERNALIZABLE;
	}
	public static get SC_ENUM(): number {
		return ObjectInputStream.$javaClass.SC_ENUM;
	}
	public static get SUBSTITUTION_PERMISSION(): SerializablePermission {
		return ObjectInputStream.$javaClass.SUBSTITUTION_PERMISSION;
	}
	public static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission {
		return ObjectInputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
	}
	public static get PROTOCOL_VERSION_1(): number {
		return ObjectInputStream.$javaClass.PROTOCOL_VERSION_1;
	}
	public static get PROTOCOL_VERSION_2(): number {
		return ObjectInputStream.$javaClass.PROTOCOL_VERSION_2;
	}
}

