declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import Charset from '../../../java/nio/charset/Charset.js'
import CoderResult from '../../../java/nio/charset/CoderResult.js'
import CodingErrorAction from '../../../java/nio/charset/CodingErrorAction.js'

export default interface CharsetEncoder {
	averageBytesPerChar(): number;
	canEncode(c: string): boolean;
	canEncode(cs: any): boolean;
	charset(): Charset;
	encode(_in: CharBuffer): ByteBuffer;
	encode(_in: CharBuffer, out: ByteBuffer, endOfInput: boolean): CoderResult;
	flush(out: ByteBuffer): CoderResult;
	isLegalReplacement(repl: Array<number>): boolean;
	malformedInputAction(): CodingErrorAction;
	maxBytesPerChar(): number;
	onMalformedInput(newAction: CodingErrorAction): CharsetEncoder;
	onUnmappableCharacter(newAction: CodingErrorAction): CharsetEncoder;
	replaceWith(newReplacement: Array<number>): CharsetEncoder;
	replacement(): Array<number>;
	reset(): CharsetEncoder;
	unmappableCharacterAction(): CodingErrorAction;
}

export default class CharsetEncoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetEncoder');
	}

}

