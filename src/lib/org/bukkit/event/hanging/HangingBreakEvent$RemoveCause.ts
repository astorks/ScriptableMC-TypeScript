declare var Java: any;

export default interface HangingBreakEvent$RemoveCause {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class HangingBreakEvent$RemoveCause {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.hanging.HangingBreakEvent$RemoveCause');
	}

	public static get DEFAULT(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.DEFAULT;
	}
	public static get ENTITY(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.ENTITY;
	}
	public static get EXPLOSION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.EXPLOSION;
	}
	public static get OBSTRUCTION(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.OBSTRUCTION;
	}
	public static get PHYSICS(): HangingBreakEvent$RemoveCause {
		return this.$javaClass.PHYSICS;
	}
}

