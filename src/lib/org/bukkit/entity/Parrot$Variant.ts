declare var Java: any;

export default interface Parrot$Variant {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Parrot$Variant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Parrot$Variant');
	}

	public static get RED(): Parrot$Variant {
		return this.$javaClass.RED;
	}
	public static get BLUE(): Parrot$Variant {
		return this.$javaClass.BLUE;
	}
	public static get GREEN(): Parrot$Variant {
		return this.$javaClass.GREEN;
	}
	public static get CYAN(): Parrot$Variant {
		return this.$javaClass.CYAN;
	}
	public static get GRAY(): Parrot$Variant {
		return this.$javaClass.GRAY;
	}
}

