declare var Java: any;

export default interface Effect$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Effect$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Effect$Type');
	}

	public static get SOUND(): Effect$Type {
		return this.$javaClass.SOUND;
	}
	public static get VISUAL(): Effect$Type {
		return this.$javaClass.VISUAL;
	}
	public static valueOf(arg0: string): Effect$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Effect$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Effect$Type>;
	public static values(...args: any[]): any {
		return Effect$Type.$javaClass.values(...args);
	}

}

