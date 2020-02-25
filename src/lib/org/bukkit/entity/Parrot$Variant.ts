declare var Java: any;

export default interface Parrot$Variant {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Parrot$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Parrot$Variant');
	}

	public static get BLUE(): Parrot$Variant {
		return this.$javaClass.BLUE;
	}
	public static get CYAN(): Parrot$Variant {
		return this.$javaClass.CYAN;
	}
	public static get GRAY(): Parrot$Variant {
		return this.$javaClass.GRAY;
	}
	public static get GREEN(): Parrot$Variant {
		return this.$javaClass.GREEN;
	}
	public static get RED(): Parrot$Variant {
		return this.$javaClass.RED;
	}
}

