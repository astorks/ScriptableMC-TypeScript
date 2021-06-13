declare var Java: any;

export default interface EntityExhaustionEvent$ExhaustionReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityExhaustionEvent$ExhaustionReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason');
	}

	public static get ATTACK(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.ATTACK;
	}
	public static get BLOCK_MINED(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.BLOCK_MINED;
	}
	public static get CROUCH(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.CROUCH;
	}
	public static get DAMAGED(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.DAMAGED;
	}
	public static get HUNGER_EFFECT(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.HUNGER_EFFECT;
	}
	public static get JUMP(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.JUMP;
	}
	public static get JUMP_SPRINT(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.JUMP_SPRINT;
	}
	public static get REGEN(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.REGEN;
	}
	public static get SPRINT(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.SPRINT;
	}
	public static get SWIM(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.SWIM;
	}
	public static get UNKNOWN(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.UNKNOWN;
	}
	public static get WALK(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.WALK;
	}
	public static get WALK_ON_WATER(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.WALK_ON_WATER;
	}
	public static get WALK_UNDERWATER(): EntityExhaustionEvent$ExhaustionReason {
		return this.$javaClass.WALK_UNDERWATER;
	}
	public static valueOf(arg0: string): EntityExhaustionEvent$ExhaustionReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EntityExhaustionEvent$ExhaustionReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<EntityExhaustionEvent$ExhaustionReason>;
	public static values(...args: any[]): any {
		return EntityExhaustionEvent$ExhaustionReason.$javaClass.values(...args);
	}

}

