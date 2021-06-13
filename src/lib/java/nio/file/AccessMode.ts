declare var Java: any;

export default interface AccessMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(_name: string): AccessMode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return AccessMode.$javaClass.valueOf(...args);
	}

	public static values(): Array<AccessMode>;
	public static values(...args: any[]): any {
		return AccessMode.$javaClass.values(...args);
	}

}

