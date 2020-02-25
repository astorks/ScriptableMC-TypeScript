declare var Java: any;

export default interface WorldType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getName(): string;
	name(): string;
	ordinal(): number;
}

export default class WorldType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldType');
	}

	public static get AMPLIFIED(): WorldType {
		return this.$javaClass.AMPLIFIED;
	}
	public static get BUFFET(): WorldType {
		return this.$javaClass.BUFFET;
	}
	public static get CUSTOMIZED(): WorldType {
		return this.$javaClass.CUSTOMIZED;
	}
	public static get FLAT(): WorldType {
		return this.$javaClass.FLAT;
	}
	public static get LARGE_BIOMES(): WorldType {
		return this.$javaClass.LARGE_BIOMES;
	}
	public static get NORMAL(): WorldType {
		return this.$javaClass.NORMAL;
	}
	public static get VERSION_1_1(): WorldType {
		return this.$javaClass.VERSION_1_1;
	}
}

