declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import CharsetDecoder from '../../../java/nio/charset/CharsetDecoder.js'
import CharsetEncoder from '../../../java/nio/charset/CharsetEncoder.js'

export default interface Charset {
	aliases(): any;
	canEncode(): boolean;
	compareTo(that: Charset): number;
	compareTo(arg0: any): number;
	contains(arg0: Charset): boolean;
	decode(bb: ByteBuffer): CharBuffer;
	displayName(): string;
	displayName(locale: any): string;
	encode(cb: CharBuffer): ByteBuffer;
	encode(str: string): ByteBuffer;
	isRegistered(): boolean;
	name(): string;
	newDecoder(): CharsetDecoder;
	newEncoder(): CharsetEncoder;
}

export default class Charset {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.Charset');
	}

	public static availableCharsets(): any;
	public static availableCharsets(...args: any[]): any {
		return Charset.$javaClass.availableCharsets(...args);
	}

	public static defaultCharset(): Charset;
	public static defaultCharset(...args: any[]): any {
		return Charset.$javaClass.defaultCharset(...args);
	}

	public static forName(charsetName: string): Charset;
	public static forName(...args: any[]): any {
		return Charset.$javaClass.forName(...args);
	}

	public static isSupported(charsetName: string): boolean;
	public static isSupported(...args: any[]): any {
		return Charset.$javaClass.isSupported(...args);
	}

}

