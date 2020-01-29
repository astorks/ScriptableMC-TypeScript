import { ByteProcessor } from '../../../../com/google/common/io/ByteProcessor.js';
import { ByteArrayDataOutput } from '../../../../com/google/common/io/ByteArrayDataOutput.js';
import { ByteArrayDataInput } from '../../../../com/google/common/io/ByteArrayDataInput.js';
export interface ByteStreams {
}
export declare class ByteStreams {
    static get $javaClass(): any;
    static limit(_in: any, limit: number): any;
    static read(_in: any, b: Array<number>, off: number, len: number): number;
    static toByteArray(_in: any): Array<number>;
    static copy(from: any, to: any): number;
    static copy(from: any, to: any): number;
    static readBytes(input: any, processor: ByteProcessor): any;
    static nullOutputStream(): any;
    static readFully(_in: any, b: Array<number>, off: number, len: number): void;
    static readFully(_in: any, b: Array<number>): void;
    static skipFully(_in: any, n: number): void;
    static exhaust(_in: any): number;
    static newDataOutput(): ByteArrayDataOutput;
    static newDataOutput(size: number): ByteArrayDataOutput;
    static newDataOutput(byteArrayOutputSteam: any): ByteArrayDataOutput;
    static newDataInput(bytes: Array<number>): ByteArrayDataInput;
    static newDataInput(bytes: Array<number>, start: number): ByteArrayDataInput;
    static newDataInput(byteArrayInputStream: any): ByteArrayDataInput;
}
