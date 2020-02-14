declare var Java: any;

export default interface FluidCollisionMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

