declare var Java: any;

export default interface CoderResult {
	length(): number;
	throwException(): void;
	isUnderflow(): boolean;
	isOverflow(): boolean;
	isMalformed(): boolean;
	isUnmappable(): boolean;
	isError(): boolean;
}

export default class CoderResult {
	public static get $javaClass(): any {
		return Java.type('java.nio.charset.CoderResult');
	}
	public static get UNDERFLOW(): CoderResult {
		return CoderResult.$javaClass.UNDERFLOW;
	}
	public static get OVERFLOW(): CoderResult {
		return CoderResult.$javaClass.OVERFLOW;
	}
	public static malformedForLength(arg0: number): CoderResult;
	public static malformedForLength(...args: any[]): any {
		return CoderResult.$javaClass.malformedForLength(...args);
	}
	public static unmappableForLength(arg0: number): CoderResult;
	public static unmappableForLength(...args: any[]): any {
		return CoderResult.$javaClass.unmappableForLength(...args);
	}
}

