declare var Java: any;

export default interface BanList$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BanList$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.BanList$Type');
	}

	public static get IP(): BanList$Type {
		return this.$javaClass.IP;
	}
	public static get _name(): BanList$Type {
		return this.$javaClass.NAME;
	}
	public static valueOf(arg0: string): BanList$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BanList$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<BanList$Type>;
	public static values(...args: any[]): any {
		return BanList$Type.$javaClass.values(...args);
	}

}

