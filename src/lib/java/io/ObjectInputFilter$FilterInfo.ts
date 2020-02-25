declare var Java: any;

export default interface ObjectInputFilter$FilterInfo {
	arrayLength(): number;
	depth(): number;
	references(): number;
	serialClass(): any;
	streamBytes(): number;
}

export default class ObjectInputFilter$FilterInfo {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputFilter$FilterInfo');
	}

}

