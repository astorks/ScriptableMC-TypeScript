import ByteArrayDataInput from '../../../../com/google/common/io/ByteArrayDataInput.js';
import ByteArrayDataOutput from '../../../../com/google/common/io/ByteArrayDataOutput.js';
import ByteArrayInputStream from '../../../../java/io/ByteArrayInputStream.js';
import ByteArrayOutputStream from '../../../../java/io/ByteArrayOutputStream.js';
import ByteProcessor from '../../../../com/google/common/io/ByteProcessor.js';
import InputStream from '../../../../java/io/InputStream.js';
import OutputStream from '../../../../java/io/OutputStream.js';
export default interface ByteStreams {
}
export default class ByteStreams {
    static get $javaClass(): any;
    static limit(_in: InputStream, limit: number): InputStream;
    static read(_in: InputStream, b: Array<number>, off: number, len: number): number;
    static toByteArray(_in: InputStream): Array<number>;
    static copy(from: InputStream, to: OutputStream): number;
    static copy(from: any, to: any): number;
    static readBytes(input: InputStream, processor: ByteProcessor): any;
    static nullOutputStream(): OutputStream;
    static readFully(_in: InputStream, b: Array<number>): void;
    static readFully(_in: InputStream, b: Array<number>, off: number, len: number): void;
    static exhaust(_in: InputStream): number;
    static newDataInput(bytes: Array<number>): ByteArrayDataInput;
    static newDataInput(bytes: Array<number>, start: number): ByteArrayDataInput;
    static newDataInput(byteArrayInputStream: ByteArrayInputStream): ByteArrayDataInput;
    static skipFully(_in: InputStream, n: number): void;
    static newDataOutput(size: number): ByteArrayDataOutput;
    static newDataOutput(): ByteArrayDataOutput;
    static newDataOutput(byteArrayOutputSteam: ByteArrayOutputStream): ByteArrayDataOutput;
}
