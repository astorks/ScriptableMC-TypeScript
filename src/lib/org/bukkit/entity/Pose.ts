declare var Java: any;

export default interface Pose {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Pose {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Pose');
	}

	public static get DYING(): Pose {
		return this.$javaClass.DYING;
	}
	public static get FALL_FLYING(): Pose {
		return this.$javaClass.FALL_FLYING;
	}
	public static get LONG_JUMPING(): Pose {
		return this.$javaClass.LONG_JUMPING;
	}
	public static get SLEEPING(): Pose {
		return this.$javaClass.SLEEPING;
	}
	public static get SNEAKING(): Pose {
		return this.$javaClass.SNEAKING;
	}
	public static get SPIN_ATTACK(): Pose {
		return this.$javaClass.SPIN_ATTACK;
	}
	public static get STANDING(): Pose {
		return this.$javaClass.STANDING;
	}
	public static get SWIMMING(): Pose {
		return this.$javaClass.SWIMMING;
	}
	public static valueOf(arg0: string): Pose;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Pose.$javaClass.valueOf(...args);
	}

	public static values(): Array<Pose>;
	public static values(...args: any[]): any {
		return Pose.$javaClass.values(...args);
	}

}

