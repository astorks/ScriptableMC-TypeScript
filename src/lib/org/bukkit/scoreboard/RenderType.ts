declare var Java: any;

export default interface RenderType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

