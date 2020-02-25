declare var Java: any;
import ByteArrayDataInput from '../../../../com/google/common/io/ByteArrayDataInput.js'
import ByteArrayDataOutput from '../../../../com/google/common/io/ByteArrayDataOutput.js'
import ByteArrayInputStream from '../../../../java/io/ByteArrayInputStream.js'
import ByteArrayOutputStream from '../../../../java/io/ByteArrayOutputStream.js'
import ByteProcessor from '../../../../com/google/common/io/ByteProcessor.js'
import InputStream from '../../../../java/io/InputStream.js'
import OutputStream from '../../../../java/io/OutputStream.js'
import ReadableByteChannel from '../../../../java/nio/channels/ReadableByteChannel.js'
import WritableByteChannel from '../../../../java/nio/channels/WritableByteChannel.js'

export default class ByteStreams {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteStreams');
	}

	public static copy(from: ReadableByteChannel, to: WritableByteChannel): number;
	public static copy(from: InputStream, to: OutputStream): number;
	public static copy(...args: any[]): any {
		return ByteStreams.$javaClass.copy(...args);
	}

	public static exhaust(_in: InputStream): number;
	public static exhaust(...args: any[]): any {
		return ByteStreams.$javaClass.exhaust(...args);
	}

	public static limit(_in: InputStream, limit: number): InputStream;
	public static limit(...args: any[]): any {
		return ByteStreams.$javaClass.limit(...args);
	}

	public static newDataInput(byteArrayInputStream: ByteArrayInputStream): ByteArrayDataInput;
	public static newDataInput(bytes: Array<number>): ByteArrayDataInput;
	public static newDataInput(bytes: Array<number>, start: number): ByteArrayDataInput;
	public static newDataInput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataInput(...args);
	}

	public static newDataOutput(): ByteArrayDataOutput;
	public static newDataOutput(size: number): ByteArrayDataOutput;
	public static newDataOutput(byteArrayOutputSteam: ByteArrayOutputStream): ByteArrayDataOutput;
	public static newDataOutput(...args: any[]): any {
		return ByteStreams.$javaClass.newDataOutput(...args);
	}

	public static nullOutputStream(): OutputStream;
	public static nullOutputStream(...args: any[]): any {
		return ByteStreams.$javaClass.nullOutputStream(...args);
	}

	public static read(_in: InputStream, b: Array<number>, off: number, len: number): number;
	public static read(...args: any[]): any {
		return ByteStreams.$javaClass.read(...args);
	}

	public static readBytes(input: InputStream, processor: ByteProcessor): any;
	public static readBytes(...args: any[]): any {
		return ByteStreams.$javaClass.readBytes(...args);
	}

	public static readFully(_in: InputStream, b: Array<number>): void;
	public static readFully(_in: InputStream, b: Array<number>, off: number, len: number): void;
	public static readFully(...args: any[]): any {
		return ByteStreams.$javaClass.readFully(...args);
	}

	public static skipFully(_in: InputStream, n: number): void;
	public static skipFully(...args: any[]): any {
		return ByteStreams.$javaClass.skipFully(...args);
	}

	public static toByteArray(_in: InputStream): Array<number>;
	public static toByteArray(...args: any[]): any {
		return ByteStreams.$javaClass.toByteArray(...args);
	}

}

