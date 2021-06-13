declare var Java: any;

export default interface FluidCollisionMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class FluidCollisionMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.FluidCollisionMode');
	}

	public static get ALWAYS(): FluidCollisionMode {
		return this.$javaClass.ALWAYS;
	}
	public static get NEVER(): FluidCollisionMode {
		return this.$javaClass.NEVER;
	}
	public static get SOURCE_ONLY(): FluidCollisionMode {
		return this.$javaClass.SOURCE_ONLY;
	}
	public static valueOf(arg0: string): FluidCollisionMode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return FluidCollisionMode.$javaClass.valueOf(...args);
	}

	public static values(): Array<FluidCollisionMode>;
	public static values(...args: any[]): any {
		return FluidCollisionMode.$javaClass.values(...args);
	}

}

