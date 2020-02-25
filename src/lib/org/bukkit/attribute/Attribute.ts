declare var Java: any;

export default interface Attribute {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Attribute {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.Attribute');
	}

	public static get GENERIC_ARMOR(): Attribute {
		return this.$javaClass.GENERIC_ARMOR;
	}
	public static get GENERIC_ARMOR_TOUGHNESS(): Attribute {
		return this.$javaClass.GENERIC_ARMOR_TOUGHNESS;
	}
	public static get GENERIC_ATTACK_DAMAGE(): Attribute {
		return this.$javaClass.GENERIC_ATTACK_DAMAGE;
	}
	public static get GENERIC_ATTACK_SPEED(): Attribute {
		return this.$javaClass.GENERIC_ATTACK_SPEED;
	}
	public static get GENERIC_FLYING_SPEED(): Attribute {
		return this.$javaClass.GENERIC_FLYING_SPEED;
	}
	public static get GENERIC_FOLLOW_RANGE(): Attribute {
		return this.$javaClass.GENERIC_FOLLOW_RANGE;
	}
	public static get GENERIC_KNOCKBACK_RESISTANCE(): Attribute {
		return this.$javaClass.GENERIC_KNOCKBACK_RESISTANCE;
	}
	public static get GENERIC_LUCK(): Attribute {
		return this.$javaClass.GENERIC_LUCK;
	}
	public static get GENERIC_MAX_HEALTH(): Attribute {
		return this.$javaClass.GENERIC_MAX_HEALTH;
	}
	public static get GENERIC_MOVEMENT_SPEED(): Attribute {
		return this.$javaClass.GENERIC_MOVEMENT_SPEED;
	}
	public static get HORSE_JUMP_STRENGTH(): Attribute {
		return this.$javaClass.HORSE_JUMP_STRENGTH;
	}
	public static get ZOMBIE_SPAWN_REINFORCEMENTS(): Attribute {
		return this.$javaClass.ZOMBIE_SPAWN_REINFORCEMENTS;
	}
}

