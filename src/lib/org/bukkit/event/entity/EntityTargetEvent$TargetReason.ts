declare var Java: any;

export default interface EntityTargetEvent$TargetReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityTargetEvent$TargetReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityTargetEvent$TargetReason');
	}

	public static get CLOSEST_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CLOSEST_ENTITY;
	}
	public static get CLOSEST_PLAYER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CLOSEST_PLAYER;
	}
	public static get COLLISION(): EntityTargetEvent$TargetReason {
		return this.$javaClass.COLLISION;
	}
	public static get CUSTOM(): EntityTargetEvent$TargetReason {
		return this.$javaClass.CUSTOM;
	}
	public static get DEFEND_VILLAGE(): EntityTargetEvent$TargetReason {
		return this.$javaClass.DEFEND_VILLAGE;
	}
	public static get FOLLOW_LEADER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.FOLLOW_LEADER;
	}
	public static get FORGOT_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.FORGOT_TARGET;
	}
	public static get OWNER_ATTACKED_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.OWNER_ATTACKED_TARGET;
	}
	public static get PIG_ZOMBIE_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.PIG_ZOMBIE_TARGET;
	}
	public static get RANDOM_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.RANDOM_TARGET;
	}
	public static get REINFORCEMENT_TARGET(): EntityTargetEvent$TargetReason {
		return this.$javaClass.REINFORCEMENT_TARGET;
	}
	public static get TARGET_ATTACKED_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_ENTITY;
	}
	public static get TARGET_ATTACKED_NEARBY_ENTITY(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_NEARBY_ENTITY;
	}
	public static get TARGET_ATTACKED_OWNER(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_ATTACKED_OWNER;
	}
	public static get TARGET_DIED(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TARGET_DIED;
	}
	public static get TEMPT(): EntityTargetEvent$TargetReason {
		return this.$javaClass.TEMPT;
	}
	public static get UNKNOWN(): EntityTargetEvent$TargetReason {
		return this.$javaClass.UNKNOWN;
	}
	public static valueOf(arg0: string): EntityTargetEvent$TargetReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EntityTargetEvent$TargetReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<EntityTargetEvent$TargetReason>;
	public static values(...args: any[]): any {
		return EntityTargetEvent$TargetReason.$javaClass.values(...args);
	}

}

