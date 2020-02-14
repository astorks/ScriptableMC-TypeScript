declare var Java: any;

export default interface AccessMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class AccessMode {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.AccessMode');
	}

	public static get EXECUTE(): AccessMode {
		return this.$javaClass.EXECUTE;
	}
	public static get READ(): AccessMode {
		return this.$javaClass.READ;
	}
	public static get WRITE(): AccessMode {
		return this.$javaClass.WRITE;
	}
}

