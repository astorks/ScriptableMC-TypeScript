declare var Java: any;
import ObjectStreamClass from '../../java/io/ObjectStreamClass.js'

export default interface ObjectInputStream$GetField {
	defaulted(arg0: string): boolean;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: any): any;
	get(arg0: string, arg1: boolean): boolean;
	get(arg0: string, arg1: number): number;
	get(arg0: string, arg1: string): string;
	get(arg0: string, arg1: number): number;
	getObjectStreamClass(): ObjectStreamClass;
}

export default class ObjectInputStream$GetField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputStream$GetField');
	}

	constructor();
	constructor(...args: any[]) {
		return new ObjectInputStream$GetField.$javaClass(...args);
	}

}

