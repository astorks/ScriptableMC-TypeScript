declare var Java: any;
import {ByteArrayDataInput} from '../../../../com/google/common/io/ByteArrayDataInput.js'
import {ByteArrayDataOutput} from '../../../../com/google/common/io/ByteArrayDataOutput.js'
import {ByteProcessor} from '../../../../com/google/common/io/ByteProcessor.js'

export interface ByteStreams {
}

export class ByteStreams {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteStreams');
	}
	public static readFully(_in: any, b: Array<number>): void;
	public static readFully(_in: any, b: Array<number>, off: number, len: number): void;
	public static readFully(...args: any[]): any {
		return ByteStreams.$javaClass.readFully(...args);
	}
	public static exhaust(_in: any): number;
	public static exhaust(...args: any[]): any {
		return ByteStreams.$javaClass.exhaust(...args);
	}
	public static newDataInput(bytes: Array<number>, start: number): ByteArrayDataInput;
	public static newDataInput(bytes: Array<number>): ByteArrayDataInput;
	public static newDataInput(byteArrayInputStream: any): ByteArrayDataInput;
	public static newDataInput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataInput(...args);
	}
	public static newDataOutput(size: number): ByteArrayDataOutput;
	public static newDataOutput(byteArrayOutputSteam: any): ByteArrayDataOutput;
	public static newDataOutput(): ByteArrayDataOutput;
	public static newDataOutput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataOutput(...args);
	}
	public static nullOutputStream(): any;
	public static nullOutputStream(...args: any[]): any {
		return ByteStreams.$javaClass.nullOutputStream(...args);
	}
	public static skipFully(_in: any, n: number): void;
	public static skipFully(...args: any[]): any {
		return ByteStreams.$javaClass.skipFully(...args);
	}
	public static limit(_in: any, limit: number): any;
	public static limit(...args: any[]): any {
		return ByteStreams.$javaClass.limit(...args);
	}
	public static read(_in: any, b: Array<number>, off: number, len: number): number;
	public static read(...args: any[]): any {
		return ByteStreams.$javaClass.read(...args);
	}
	public static copy(from: any, to: any): number;
	public static copy(from: any, to: any): number;
	public static copy(...args: any[]): any {
		return ByteStreams.$javaClass.copy(...args);
	}
	public static readBytes(input: any, processor: ByteProcessor): any;
	public static readBytes(...args: any[]): any {
		return ByteStreams.$javaClass.readBytes(...args);
	}
	public static toByteArray(_in: any): Array<number>;
	public static toByteArray(...args: any[]): any {
		return ByteStreams.$javaClass.toByteArray(...args);
	}
}

