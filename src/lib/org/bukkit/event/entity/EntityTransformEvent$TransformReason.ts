declare var Java: any;

export default interface EntityTransformEvent$TransformReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityTransformEvent$TransformReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTransformEvent$TransformReason');
	}

	public static get CURED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.CURED;
	}
	public static get DROWNED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.DROWNED;
	}
	public static get INFECTION(): EntityTransformEvent$TransformReason {
		return this.$javaClass.INFECTION;
	}
	public static get LIGHTNING(): EntityTransformEvent$TransformReason {
		return this.$javaClass.LIGHTNING;
	}
	public static get PIGLIN_ZOMBIFIED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.PIGLIN_ZOMBIFIED;
	}
	public static get SHEARED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SHEARED;
	}
	public static get SPLIT(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SPLIT;
	}
	public static get UNKNOWN(): EntityTransformEvent$TransformReason {
		return this.$javaClass.UNKNOWN;
	}
	public static valueOf(arg0: string): EntityTransformEvent$TransformReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EntityTransformEvent$TransformReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<EntityTransformEvent$TransformReason>;
	public static values(...args: any[]): any {
		return EntityTransformEvent$TransformReason.$javaClass.values(...args);
	}

}

