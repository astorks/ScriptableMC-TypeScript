declare var Java: any;

export default interface ObjectInputFilter$Status {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ObjectInputFilter$Status {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputFilter$Status');
	}

	public static get ALLOWED(): ObjectInputFilter$Status {
		return this.$javaClass.ALLOWED;
	}
	public static get REJECTED(): ObjectInputFilter$Status {
		return this.$javaClass.REJECTED;
	}
	public static get UNDECIDED(): ObjectInputFilter$Status {
		return this.$javaClass.UNDECIDED;
	}
}

