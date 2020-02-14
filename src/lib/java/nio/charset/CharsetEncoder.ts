declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import Charset from '../../../java/nio/charset/Charset.js'
import CoderResult from '../../../java/nio/charset/CoderResult.js'
import CodingErrorAction from '../../../java/nio/charset/CodingErrorAction.js'

export default interface CharsetEncoder {
	charset(): Charset;
	encode(arg0: CharBuffer): ByteBuffer;
	encode(arg0: CharBuffer, arg1: ByteBuffer, arg2: boolean): CoderResult;
	flush(arg0: ByteBuffer): CoderResult;
	reset(): CharsetEncoder;
	canEncode(arg0: string): boolean;
	canEncode(arg0: any): boolean;
	onMalformedInput(arg0: CodingErrorAction): CharsetEncoder;
	onUnmappableCharacter(arg0: CodingErrorAction): CharsetEncoder;
	maxBytesPerChar(): number;
	malformedInputAction(): CodingErrorAction;
	replacement(): Array<number>;
	unmappableCharacterAction(): CodingErrorAction;
	replaceWith(arg0: Array<number>): CharsetEncoder;
	isLegalReplacement(arg0: Array<number>): boolean;
	averageBytesPerChar(): number;
}

export default class CharsetEncoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetEncoder');
	}
}

