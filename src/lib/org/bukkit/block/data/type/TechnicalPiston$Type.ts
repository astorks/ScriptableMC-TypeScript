declare var Java: any;

export default interface TechnicalPiston$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): TechnicalPiston$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return TechnicalPiston$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<TechnicalPiston$Type>;
	public static values(...args: any[]): any {
		return TechnicalPiston$Type.$javaClass.values(...args);
	}

}

