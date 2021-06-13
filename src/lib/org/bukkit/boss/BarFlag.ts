declare var Java: any;

export default interface BarFlag {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BarFlag {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.BarFlag');
	}

	public static get CREATE_FOG(): BarFlag {
		return this.$javaClass.CREATE_FOG;
	}
	public static get DARKEN_SKY(): BarFlag {
		return this.$javaClass.DARKEN_SKY;
	}
	public static get PLAY_BOSS_MUSIC(): BarFlag {
		return this.$javaClass.PLAY_BOSS_MUSIC;
	}
	public static valueOf(arg0: string): BarFlag;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BarFlag.$javaClass.valueOf(...args);
	}

	public static values(): Array<BarFlag>;
	public static values(...args: any[]): any {
		return BarFlag.$javaClass.values(...args);
	}

}

