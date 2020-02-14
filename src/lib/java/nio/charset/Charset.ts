declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import CharsetDecoder from '../../../java/nio/charset/CharsetDecoder.js'
import CharsetEncoder from '../../../java/nio/charset/CharsetEncoder.js'

export default interface Charset {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: Charset): number;
	contains(arg0: Charset): boolean;
	decode(arg0: ByteBuffer): CharBuffer;
	encode(arg0: CharBuffer): ByteBuffer;
	encode(arg0: string): ByteBuffer;
	isRegistered(): boolean;
	aliases(): any;
	displayName(arg0: any): string;
	displayName(): string;
	newDecoder(): CharsetDecoder;
	newEncoder(): CharsetEncoder;
	canEncode(): boolean;
}

export default class Charset {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.Charset');
	}
	public static forName(arg0: string): Charset;
	public static forName(...args: any[]): any {
		return Charset.$javaClass.forName(...args);
	}
	public static defaultCharset(): Charset;
	public static defaultCharset(...args: any[]): any {
		return Charset.$javaClass.defaultCharset(...args);
	}
	public static isSupported(arg0: string): boolean;
	public static isSupported(...args: any[]): any {
		return Charset.$javaClass.isSupported(...args);
	}
	public static availableCharsets(): any;
	public static availableCharsets(...args: any[]): any {
		return Charset.$javaClass.availableCharsets(...args);
	}
}

