declare var Java: any;

export default interface Bamboo$Leaves {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Bamboo$Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bamboo$Leaves');
	}

	public static get NONE(): Bamboo$Leaves {
		return this.$javaClass.NONE;
	}
	public static get SMALL(): Bamboo$Leaves {
		return this.$javaClass.SMALL;
	}
	public static get LARGE(): Bamboo$Leaves {
		return this.$javaClass.LARGE;
	}
}

