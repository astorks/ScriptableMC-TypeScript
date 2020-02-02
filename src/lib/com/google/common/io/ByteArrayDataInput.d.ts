export default interface ByteArrayDataInput {
    readFloat(): number;
    readFully(arg0: Array<number>): void;
    readFully(arg0: Array<number>, arg1: number, arg2: number): void;
    readLong(): number;
    readByte(): number;
    readUnsignedShort(): number;
    skipBytes(arg0: number): number;
    readBoolean(): boolean;
    readUnsignedByte(): number;
    readShort(): number;
    readDouble(): number;
    readLine(): string;
    readInt(): number;
    readChar(): string;
    readUTF(): string;
}
export default class ByteArrayDataInput {
    static get $javaClass(): any;
}
