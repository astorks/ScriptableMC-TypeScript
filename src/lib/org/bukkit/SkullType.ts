declare var Java: any;

export default interface SkullType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): SkullType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return SkullType.$javaClass.valueOf(...args);
	}

	public static values(): Array<SkullType>;
	public static values(...args: any[]): any {
		return SkullType.$javaClass.values(...args);
	}

}

