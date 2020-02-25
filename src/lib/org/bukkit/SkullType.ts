declare var Java: any;

export default interface SkullType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SkullType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.SkullType');
	}

	public static get CREEPER(): SkullType {
		return this.$javaClass.CREEPER;
	}
	public static get DRAGON(): SkullType {
		return this.$javaClass.DRAGON;
	}
	public static get PLAYER(): SkullType {
		return this.$javaClass.PLAYER;
	}
	public static get SKELETON(): SkullType {
		return this.$javaClass.SKELETON;
	}
	public static get WITHER(): SkullType {
		return this.$javaClass.WITHER;
	}
	public static get ZOMBIE(): SkullType {
		return this.$javaClass.ZOMBIE;
	}
}

