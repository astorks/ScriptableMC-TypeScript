export interface ByteArrayDataInput {
    readFloat(): number;
    readLong(): number;
    readFully(arg0: Array<number>): void;
    readFully(arg0: Array<number>, arg1: number, arg2: number): void;
    readUnsignedShort(): number;
    skipBytes(arg0: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readUnsignedByte(): number;
    readShort(): number;
    readDouble(): number;
    readLine(): string;
    readInt(): number;
    readChar(): string;
    readUTF(): string;
}
export declare class ByteArrayDataInput {
    static get $javaClass(): any;
}
