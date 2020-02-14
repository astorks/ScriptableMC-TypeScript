declare var Java: any;

export default interface CoderResult {
	isError(): boolean;
	isMalformed(): boolean;
	isOverflow(): boolean;
	isUnderflow(): boolean;
	isUnmappable(): boolean;
	length(): number;
	throwException(): void;
}

export default class CoderResult {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CoderResult');
	}

	public static get OVERFLOW(): CoderResult {
		return CoderResult.$javaClass.OVERFLOW;
	}

	public static get UNDERFLOW(): CoderResult {
		return CoderResult.$javaClass.UNDERFLOW;
	}

	public static malformedForLength(length: number): CoderResult;
	public static malformedForLength(...args: any[]): any {
		return CoderResult.$javaClass.malformedForLength(...args);
	}

	public static unmappableForLength(length: number): CoderResult;
	public static unmappableForLength(...args: any[]): any {
		return CoderResult.$javaClass.unmappableForLength(...args);
	}

}

