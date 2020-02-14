declare var Java: any;

export default interface EnderDragon$Phase {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EnderDragon$Phase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.EnderDragon$Phase');
	}

	public static get BREATH_ATTACK(): EnderDragon$Phase {
		return this.$javaClass.BREATH_ATTACK;
	}
	public static get CHARGE_PLAYER(): EnderDragon$Phase {
		return this.$javaClass.CHARGE_PLAYER;
	}
	public static get CIRCLING(): EnderDragon$Phase {
		return this.$javaClass.CIRCLING;
	}
	public static get DYING(): EnderDragon$Phase {
		return this.$javaClass.DYING;
	}
	public static get FLY_TO_PORTAL(): EnderDragon$Phase {
		return this.$javaClass.FLY_TO_PORTAL;
	}
	public static get HOVER(): EnderDragon$Phase {
		return this.$javaClass.HOVER;
	}
	public static get LAND_ON_PORTAL(): EnderDragon$Phase {
		return this.$javaClass.LAND_ON_PORTAL;
	}
	public static get LEAVE_PORTAL(): EnderDragon$Phase {
		return this.$javaClass.LEAVE_PORTAL;
	}
	public static get ROAR_BEFORE_ATTACK(): EnderDragon$Phase {
		return this.$javaClass.ROAR_BEFORE_ATTACK;
	}
	public static get SEARCH_FOR_BREATH_ATTACK_TARGET(): EnderDragon$Phase {
		return this.$javaClass.SEARCH_FOR_BREATH_ATTACK_TARGET;
	}
	public static get STRAFING(): EnderDragon$Phase {
		return this.$javaClass.STRAFING;
	}
}

