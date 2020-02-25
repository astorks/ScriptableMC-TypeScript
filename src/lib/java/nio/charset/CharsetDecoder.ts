declare var Java: any;
import ByteBuffer from '../../../java/nio/ByteBuffer.js'
import CharBuffer from '../../../java/nio/CharBuffer.js'
import Charset from '../../../java/nio/charset/Charset.js'
import CoderResult from '../../../java/nio/charset/CoderResult.js'
import CodingErrorAction from '../../../java/nio/charset/CodingErrorAction.js'

export default interface CharsetDecoder {
	averageCharsPerByte(): number;
	charset(): Charset;
	decode(_in: ByteBuffer): CharBuffer;
	decode(_in: ByteBuffer, out: CharBuffer, endOfInput: boolean): CoderResult;
	detectedCharset(): Charset;
	flush(out: CharBuffer): CoderResult;
	isAutoDetecting(): boolean;
	isCharsetDetected(): boolean;
	malformedInputAction(): CodingErrorAction;
	maxCharsPerByte(): number;
	onMalformedInput(newAction: CodingErrorAction): CharsetDecoder;
	onUnmappableCharacter(newAction: CodingErrorAction): CharsetDecoder;
	replaceWith(newReplacement: string): CharsetDecoder;
	replacement(): string;
	reset(): CharsetDecoder;
	unmappableCharacterAction(): CodingErrorAction;
}

export default class CharsetDecoder {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CharsetDecoder');
	}

}

