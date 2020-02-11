export default interface DataInput {
    readLine(): string;
    readInt(): number;
    readUTF(): string;
    readFloat(): number;
    readFully(arg0: Array<number>): void;
    readFully(arg0: Array<number>, arg1: number, arg2: number): void;
    readChar(): string;
    skipBytes(arg0: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readUnsignedShort(): number;
    readLong(): number;
    readDouble(): number;
}
export default class DataInput {
    static get $javaClass(): any;
}
