declare var Java: any;

export default interface AccessMode {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class AccessMode {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.AccessMode');
	}

	public static get READ(): AccessMode {
		return this.$javaClass.READ;
	}
	public static get WRITE(): AccessMode {
		return this.$javaClass.WRITE;
	}
	public static get EXECUTE(): AccessMode {
		return this.$javaClass.EXECUTE;
	}
}

