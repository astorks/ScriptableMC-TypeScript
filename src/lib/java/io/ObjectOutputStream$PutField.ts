declare var Java: any;
import ObjectOutput from '../../java/io/ObjectOutput.js'

export default interface ObjectOutputStream$PutField {
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: any): void;
	put(arg0: string, arg1: boolean): void;
	put(arg0: string, arg1: number): void;
	put(arg0: string, arg1: string): void;
	put(arg0: string, arg1: number): void;
	write(arg0: ObjectOutput): void;
}

export default class ObjectOutputStream$PutField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectOutputStream$PutField');
	}

	constructor();
	constructor(...args: any[]) {
		return new ObjectOutputStream$PutField.$javaClass(...args);
	}

}

