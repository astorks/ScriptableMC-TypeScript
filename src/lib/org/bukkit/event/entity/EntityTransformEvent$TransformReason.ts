declare var Java: any;

export default interface EntityTransformEvent$TransformReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
	public static get SHEARED(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SHEARED;
	}
	public static get SPLIT(): EntityTransformEvent$TransformReason {
		return this.$javaClass.SPLIT;
	}
}

