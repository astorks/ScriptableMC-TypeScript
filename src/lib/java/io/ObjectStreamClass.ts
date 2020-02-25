declare var Java: any;
import ObjectStreamField from '../../java/io/ObjectStreamField.js'
import Serializable from '../../java/io/Serializable.js'

export default interface ObjectStreamClass {
	forClass(): any;
	getField(_name: string): ObjectStreamField;
	getFields(): Array<ObjectStreamField>;
	getName(): string;
	getSerialVersionUID(): number;
}

export default class ObjectStreamClass {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamClass');
	}

	public static get NO_FIELDS(): Array<ObjectStreamField> {
		return ObjectStreamClass.$javaClass.NO_FIELDS;
	}

	public static lookup(cl: any): ObjectStreamClass;
	public static lookup(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookup(...args);
	}

	public static lookupAny(cl: any): ObjectStreamClass;
	public static lookupAny(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookupAny(...args);
	}

}

