export default interface BukkitObjectInputStream {
    readObject(): any;
    defaultReadObject(): void;
    read(buf: Array<number>, off: number, len: number): number;
    read(): number;
    readLine(): string;
    close(): void;
    readInt(): number;
    readFields(): any;
    available(): number;
    readUTF(): string;
    readFloat(): number;
    readChar(): string;
    readFully(buf: Array<number>): void;
    readFully(buf: Array<number>, off: number, len: number): void;
    skipBytes(len: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readLong(): number;
    readDouble(): number;
    readUnshared(): any;
    registerValidation(obj: any, prio: number): void;
    getObjectInputFilter(): any;
    setObjectInputFilter(filter: any): void;
    read(b: Array<number>): number;
    mark(readlimit: number): void;
    readAllBytes(): Array<number>;
    readNBytes(b: Array<number>, off: number, len: number): number;
    readNBytes(len: number): Array<number>;
    transferTo(out: any): number;
    skip(n: number): number;
    markSupported(): boolean;
    reset(): void;
}
export default class BukkitObjectInputStream {
    static get $javaClass(): any;
    constructor(_in: any);
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
    static get SUBSTITUTION_PERMISSION(): any;
    static get SUBCLASS_IMPLEMENTATION_PERMISSION(): any;
    static get SERIAL_FILTER_PERMISSION(): any;
    static get PROTOCOL_VERSION_1(): number;
    static get PROTOCOL_VERSION_2(): number;
    static nullInputStream(): any;
}