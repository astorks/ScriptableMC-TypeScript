declare var Java: any;

export default interface Fox$Type {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Fox$Type {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Fox$Type');
	}

	public static get RED(): Fox$Type {
		return this.$javaClass.RED;
	}
	public static get SNOW(): Fox$Type {
		return this.$javaClass.SNOW;
	}
	public static valueOf(arg0: string): Fox$Type;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Fox$Type.$javaClass.valueOf(...args);
	}

	public static values(): Array<Fox$Type>;
	public static values(...args: any[]): any {
		return Fox$Type.$javaClass.values(...args);
	}

}

