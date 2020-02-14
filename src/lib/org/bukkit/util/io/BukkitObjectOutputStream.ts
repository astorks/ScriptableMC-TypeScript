declare var Java: any;
import ObjectOutputStream from '../../../../java/io/ObjectOutputStream.js'
import ObjectOutputStream$PutField from '../../../../java/io/ObjectOutputStream$PutField.js'
import OutputStream from '../../../../java/io/OutputStream.js'
import SerializablePermission from '../../../../java/io/SerializablePermission.js'

export default interface BukkitObjectOutputStream extends ObjectOutputStream {
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

export default class BukkitObjectOutputStream {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.io.BukkitObjectOutputStream');
	}

	constructor(out: OutputStream);
	constructor(...args: any[]) {
		return new BukkitObjectOutputStream.$javaClass(...args);
	}

	public static get PROTOCOL_VERSION_1(): number {
		return BukkitObjectOutputStream.$javaClass.PROTOCOL_VERSION_1;
	}

	public static get PROTOCOL_VERSION_2(): number {
		return BukkitObjectOutputStream.$javaClass.PROTOCOL_VERSION_2;
	}

	public static get SC_BLOCK_DATA(): number {
		return BukkitObjectOutputStream.$javaClass.SC_BLOCK_DATA;
	}

	public static get SC_ENUM(): number {
		return BukkitObjectOutputStream.$javaClass.SC_ENUM;
	}

	public static get SC_EXTERNALIZABLE(): number {
		return BukkitObjectOutputStream.$javaClass.SC_EXTERNALIZABLE;
	}

	public static get SC_SERIALIZABLE(): number {
		return BukkitObjectOutputStream.$javaClass.SC_SERIALIZABLE;
	}

	public static get SC_WRITE_METHOD(): number {
		return BukkitObjectOutputStream.$javaClass.SC_WRITE_METHOD;
	}

	public static get SERIAL_FILTER_PERMISSION(): SerializablePermission {
		return BukkitObjectOutputStream.$javaClass.SERIAL_FILTER_PERMISSION;
	}

	public static get STREAM_MAGIC(): number {
		return BukkitObjectOutputStream.$javaClass.STREAM_MAGIC;
	}

	public static get STREAM_VERSION(): number {
		return BukkitObjectOutputStream.$javaClass.STREAM_VERSION;
	}

	public static get SUBCLASS_IMPLEMENTATION_PERMISSION(): SerializablePermission {
		return BukkitObjectOutputStream.$javaClass.SUBCLASS_IMPLEMENTATION_PERMISSION;
	}

	public static get SUBSTITUTION_PERMISSION(): SerializablePermission {
		return BukkitObjectOutputStream.$javaClass.SUBSTITUTION_PERMISSION;
	}

	public static get TC_ARRAY(): number {
		return BukkitObjectOutputStream.$javaClass.TC_ARRAY;
	}

	public static get TC_BASE(): number {
		return BukkitObjectOutputStream.$javaClass.TC_BASE;
	}

	public static get TC_BLOCKDATA(): number {
		return BukkitObjectOutputStream.$javaClass.TC_BLOCKDATA;
	}

	public static get TC_BLOCKDATALONG(): number {
		return BukkitObjectOutputStream.$javaClass.TC_BLOCKDATALONG;
	}

	public static get TC_CLASS(): number {
		return BukkitObjectOutputStream.$javaClass.TC_CLASS;
	}

	public static get TC_CLASSDESC(): number {
		return BukkitObjectOutputStream.$javaClass.TC_CLASSDESC;
	}

	public static get TC_ENDBLOCKDATA(): number {
		return BukkitObjectOutputStream.$javaClass.TC_ENDBLOCKDATA;
	}

	public static get TC_ENUM(): number {
		return BukkitObjectOutputStream.$javaClass.TC_ENUM;
	}

	public static get TC_EXCEPTION(): number {
		return BukkitObjectOutputStream.$javaClass.TC_EXCEPTION;
	}

	public static get TC_LONGSTRING(): number {
		return BukkitObjectOutputStream.$javaClass.TC_LONGSTRING;
	}

	public static get TC_MAX(): number {
		return BukkitObjectOutputStream.$javaClass.TC_MAX;
	}

	public static get TC_NULL(): number {
		return BukkitObjectOutputStream.$javaClass.TC_NULL;
	}

	public static get TC_OBJECT(): number {
		return BukkitObjectOutputStream.$javaClass.TC_OBJECT;
	}

	public static get TC_PROXYCLASSDESC(): number {
		return BukkitObjectOutputStream.$javaClass.TC_PROXYCLASSDESC;
	}

	public static get TC_REFERENCE(): number {
		return BukkitObjectOutputStream.$javaClass.TC_REFERENCE;
	}

	public static get TC_RESET(): number {
		return BukkitObjectOutputStream.$javaClass.TC_RESET;
	}

	public static get TC_STRING(): number {
		return BukkitObjectOutputStream.$javaClass.TC_STRING;
	}

	public static get baseWireHandle(): number {
		return BukkitObjectOutputStream.$javaClass.baseWireHandle;
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return BukkitObjectOutputStream.$javaClass.nullOutputStream(...args);
	}

}

