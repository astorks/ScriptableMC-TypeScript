declare var Java: any;

export default interface BarFlag {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

