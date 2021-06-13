declare var Java: any;

export default interface FireworkEffect$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FireworkEffect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FireworkEffect$Type');
	}

	public static get BALL(): FireworkEffect$Type {
		return this.$javaClass.BALL;
	}
	public static get BALL_LARGE(): FireworkEffect$Type {
		return this.$javaClass.BALL_LARGE;
	}
	public static get BURST(): FireworkEffect$Type {
		return this.$javaClass.BURST;
	}
	public static get CREEPER(): FireworkEffect$Type {
		return this.$javaClass.CREEPER;
	}
	public static get STAR(): FireworkEffect$Type {
		return this.$javaClass.STAR;
	}
	public static valueOf(arg0: string): FireworkEffect$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return FireworkEffect$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<FireworkEffect$Type>;
	public static values(...args: any[]): any {
		return FireworkEffect$Type.$javaClass.values(...args);
	}

}

