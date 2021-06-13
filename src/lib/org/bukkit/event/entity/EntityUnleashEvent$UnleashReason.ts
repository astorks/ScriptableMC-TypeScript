declare var Java: any;

export default interface EntityUnleashEvent$UnleashReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityUnleashEvent$UnleashReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityUnleashEvent$UnleashReason');
	}

	public static get DISTANCE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.DISTANCE;
	}
	public static get HOLDER_GONE(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.HOLDER_GONE;
	}
	public static get PLAYER_UNLEASH(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.PLAYER_UNLEASH;
	}
	public static get UNKNOWN(): EntityUnleashEvent$UnleashReason {
		return this.$javaClass.UNKNOWN;
	}
	public static valueOf(arg0: string): EntityUnleashEvent$UnleashReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return EntityUnleashEvent$UnleashReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<EntityUnleashEvent$UnleashReason>;
	public static values(...args: any[]): any {
		return EntityUnleashEvent$UnleashReason.$javaClass.values(...args);
	}

}

