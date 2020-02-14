declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import Charset from '../../../java/nio/charset/Charset.js'
import CoderResult from '../../../java/nio/charset/CoderResult.js'
import CodingErrorAction from '../../../java/nio/charset/CodingErrorAction.js'

export default interface CharsetDecoder {
	charset(): Charset;
	decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;
	decode(arg0: ByteBuffer): CharBuffer;
	flush(arg0: CharBuffer): CoderResult;
	reset(): CharsetDecoder;
	onMalformedInput(arg0: CodingErrorAction): CharsetDecoder;
	onUnmappableCharacter(arg0: CodingErrorAction): CharsetDecoder;
	maxCharsPerByte(): number;
	malformedInputAction(): CodingErrorAction;
	replacement(): string;
	averageCharsPerByte(): number;
	unmappableCharacterAction(): CodingErrorAction;
	replaceWith(arg0: string): CharsetDecoder;
	isAutoDetecting(): boolean;
	isCharsetDetected(): boolean;
	detectedCharset(): Charset;
}

export default class CharsetDecoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetDecoder');
	}
}

