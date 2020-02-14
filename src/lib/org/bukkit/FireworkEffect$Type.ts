declare var Java: any;

export default interface FireworkEffect$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

