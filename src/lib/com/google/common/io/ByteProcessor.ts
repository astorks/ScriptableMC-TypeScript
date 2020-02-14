declare var Java: any;

export default interface ByteProcessor {
	getResult(): any;
	processBytes(arg0: Array<number>, arg1: number, arg2: number): boolean;
}

export default class ByteProcessor {
	public static get $javaClass(): any {
		return Java.type('com.google.common.io.ByteProcessor');
	}

}

