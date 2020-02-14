declare var Java: any;

export default interface TechnicalPiston$Type {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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

