declare var Java: any;

export default interface TechnicalPiston$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class TechnicalPiston$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TechnicalPiston$Type');
	}

	public static get NORMAL(): TechnicalPiston$Type {
		return this.$javaClass.NORMAL;
	}
	public static get STICKY(): TechnicalPiston$Type {
		return this.$javaClass.STICKY;
	}
}

