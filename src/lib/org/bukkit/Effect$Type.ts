declare var Java: any;

export default interface Effect$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

