declare var Java: any;

export default interface EntityRegainHealthEvent$RegainReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityRegainHealthEvent$RegainReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason');
	}

	public static get CUSTOM(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.CUSTOM;
	}
	public static get EATING(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.EATING;
	}
	public static get ENDER_CRYSTAL(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.ENDER_CRYSTAL;
	}
	public static get MAGIC(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC;
	}
	public static get MAGIC_REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.MAGIC_REGEN;
	}
	public static get REGEN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.REGEN;
	}
	public static get SATIATED(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.SATIATED;
	}
	public static get WITHER(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER;
	}
	public static get WITHER_SPAWN(): EntityRegainHealthEvent$RegainReason {
		return this.$javaClass.WITHER_SPAWN;
	}
}

