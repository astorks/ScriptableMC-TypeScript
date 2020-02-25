declare var Java: any;

export default interface EntityDamageEvent$DamageModifier {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityDamageEvent$DamageModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntityDamageEvent$DamageModifier');
	}

	public static get ABSORPTION(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ABSORPTION;
	}
	public static get ARMOR(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.ARMOR;
	}
	public static get BASE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BASE;
	}
	public static get BLOCKING(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.BLOCKING;
	}
	public static get HARD_HAT(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.HARD_HAT;
	}
	public static get MAGIC(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.MAGIC;
	}
	public static get RESISTANCE(): EntityDamageEvent$DamageModifier {
		return this.$javaClass.RESISTANCE;
	}
}

