declare var Java: any;
import ObjectOutput from '../../java/io/ObjectOutput.js'
import ObjectOutputStream$PutField from '../../java/io/ObjectOutputStream$PutField.js'
import ObjectStreamConstants from '../../java/io/ObjectStreamConstants.js'
import OutputStream from '../../java/io/OutputStream.js'
import SerializablePermission from '../../java/io/SerializablePermission.js'

export default interface ObjectOutputStream extends OutputStream {
	close(): void;
	defaultWriteObject(): void;
	flush(): void;
	putFields(): ObjectOutputStream$PutField;
	reset(): void;
	useProtocolVersion(version: number): void;
	write(buf: Array<number>): void;
	write(val: number): void;
	write(buf: Array<number>, off: number, len: number): void;
	writeBoolean(val: boolean): void;
	writeByte(val: number): void;
	writeBytes(str: string): void;
	writeChar(val: number): void;
	writeChars(str: string): void;
	writeDouble(val: number): void;
	writeFields(): void;
	writeFloat(val: number): void;
	writeInt(val: number): void;
	writeLong(val: number): void;
	writeObject(obj: any): void;
	writeShort(val: number): void;
	writeUTF(str: string): void;
	writeUnshared(obj: any): void;
}

export default class ObjectOutputStream {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectOutputStream');
	}

	constructor(out: OutputStream);
	constructor(...args: any[]) {
		return new ObjectOutputStream.$javaClass(...args);
	}

	public static get PROTOCOL_VERSION_1(): number {
		return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_1;
	}

	public static get PROTOCOL_VERSION_2(): number {
		return ObjectOutputStream.$javaClass.PROTOCOL_VERSION_2;
	}

	public static get SC_BLOCK_DATA(): number {
		return ObjectOutputStream.$javaClass.SC_BLOCK_DATA;
	}

	public static get SC_ENUM(): number {
		return ObjectOutputStream.$javaClass.SC_ENUM;
	}

	public static get SC_EXTERNALIZABLE(): number {
		return ObjectOutputStream.$javaClass.SC_EXTERNALIZABLE;
	}

	public static get SC_SERIALIZABLE(): number {
		return ObjectOutputStream.$javaClass.SC_SERIALIZABLE;
	}

	public static get SC_WRITE_METHOD(): number {
		return ObjectOutputStream.$javaClass.SC_WRITE_METHOD;
	}

	public static get SERIAL_FILTER_PERMISSION(): SerializablePermission {
		return ObjectOutputStream.$javaClass.SERIAL_FILTER_PERMISSION;
	}

	public static get STREAM_MAGIC(): number {
		return ObjectOutputStream.$javaClass.STREAM_MAGIC;
	}

	public static get STREAM_VERSION(): number {
		return ObjectOutputStream.$javaClass.STREAM_VERSION;
	}

	public static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission {
		return ObjectOutputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
	}

	public static get SUBSTITUTION_PERMISSION(): SerializablePermission {
		return ObjectOutputStream.$javaClass.SUBSTITUTION_PERMISSION;
	}

	public static get TC_ARRAY(): number {
		return ObjectOutputStream.$javaClass.TC_ARRAY;
	}

	public static get TC_BASE(): number {
		return ObjectOutputStream.$javaClass.TC_BASE;
	}

	public static get TC_BLOCKDATA(): number {
		return ObjectOutputStream.$javaClass.TC_BLOCKDATA;
	}

	public static get TC_BLOCKDATALONG(): number {
		return ObjectOutputStream.$javaClass.TC_BLOCKDATALONG;
	}

	public static get TC_CLASS(): number {
		return ObjectOutputStream.$javaClass.TC_CLASS;
	}

	public static get TC_CLASSDESC(): number {
		return ObjectOutputStream.$javaClass.TC_CLASSDESC;
	}

	public static get TC_ENDBLOCKDATA(): number {
		return ObjectOutputStream.$javaClass.TC_ENDBLOCKDATA;
	}

	public static get TC_ENUM(): number {
		return ObjectOutputStream.$javaClass.TC_ENUM;
	}

	public static get TC_EXCEPTION(): number {
		return ObjectOutputStream.$javaClass.TC_EXCEPTION;
	}

	public static get TC_LONGSTRING(): number {
		return ObjectOutputStream.$javaClass.TC_LONGSTRING;
	}

	public static get TC_MAX(): number {
		return ObjectOutputStream.$javaClass.TC_MAX;
	}

	public static get TC_NULL(): number {
		return ObjectOutputStream.$javaClass.TC_NULL;
	}

	public static get TC_OBJECT(): number {
		return ObjectOutputStream.$javaClass.TC_OBJECT;
	}

	public static get TC_PROXYCLASSDESC(): number {
		return ObjectOutputStream.$javaClass.TC_PROXYCLASSDESC;
	}

	public static get TC_REFERENCE(): number {
		return ObjectOutputStream.$javaClass.TC_REFERENCE;
	}

	public static get TC_RESET(): number {
		return ObjectOutputStream.$javaClass.TC_RESET;
	}

	public static get TC_STRING(): number {
		return ObjectOutputStream.$javaClass.TC_STRING;
	}

	public static get baseWireHandle(): number {
		return ObjectOutputStream.$javaClass.baseWireHandle;
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return ObjectOutputStream.$javaClass.nullOutputStream(...args);
	}

}

