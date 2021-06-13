declare var Java: any;

export default interface RenderType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class RenderType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.RenderType');
	}

	public static get HEARTS(): RenderType {
		return this.$javaClass.HEARTS;
	}
	public static get INTEGER(): RenderType {
		return this.$javaClass.INTEGER;
	}
	public static valueOf(arg0: string): RenderType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return RenderType.$javaClass.valueOf(...args);
	}

	public static values(): Array<RenderType>;
	public static values(...args: any[]): any {
		return RenderType.$javaClass.values(...args);
	}

}

