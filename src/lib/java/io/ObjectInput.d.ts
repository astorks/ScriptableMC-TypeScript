export default interface ObjectInput {
    readObject(): any;
    read(arg0: Array<number>, arg1: number, arg2: number): number;
    read(arg0: Array<number>): number;
    read(): number;
    close(): void;
    skip(arg0: number): number;
    available(): number;
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
export default class ObjectInput {
    static get $javaClass(): any;
}
