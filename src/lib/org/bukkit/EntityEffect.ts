declare var Java: any;

export default interface EntityEffect {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getApplicable(): any;
	getData(): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class EntityEffect {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.EntityEffect');
	}

	public static get ARMOR_STAND_HIT(): EntityEffect {
		return this.$javaClass.ARMOR_STAND_HIT;
	}
	public static get ARROW_PARTICLES(): EntityEffect {
		return this.$javaClass.ARROW_PARTICLES;
	}
	public static get BREAK_EQUIPMENT_BOOTS(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_BOOTS;
	}
	public static get BREAK_EQUIPMENT_CHESTPLATE(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_CHESTPLATE;
	}
	public static get BREAK_EQUIPMENT_HELMET(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_HELMET;
	}
	public static get BREAK_EQUIPMENT_LEGGINGS(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_LEGGINGS;
	}
	public static get BREAK_EQUIPMENT_MAIN_HAND(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_MAIN_HAND;
	}
	public static get BREAK_EQUIPMENT_OFF_HAND(): EntityEffect {
		return this.$javaClass.BREAK_EQUIPMENT_OFF_HAND;
	}
	public static get CAT_TAME_FAIL(): EntityEffect {
		return this.$javaClass.CAT_TAME_FAIL;
	}
	public static get CAT_TAME_SUCCESS(): EntityEffect {
		return this.$javaClass.CAT_TAME_SUCCESS;
	}
	public static get DEATH(): EntityEffect {
		return this.$javaClass.DEATH;
	}
	public static get DOLPHIN_FED(): EntityEffect {
		return this.$javaClass.DOLPHIN_FED;
	}
	public static get ENTITY_POOF(): EntityEffect {
		return this.$javaClass.ENTITY_POOF;
	}
	public static get FIREWORK_EXPLODE(): EntityEffect {
		return this.$javaClass.FIREWORK_EXPLODE;
	}
	public static get FOX_CHEW(): EntityEffect {
		return this.$javaClass.FOX_CHEW;
	}
	public static get GUARDIAN_TARGET(): EntityEffect {
		return this.$javaClass.GUARDIAN_TARGET;
	}
	public static get HURT(): EntityEffect {
		return this.$javaClass.HURT;
	}
	public static get HURT_BERRY_BUSH(): EntityEffect {
		return this.$javaClass.HURT_BERRY_BUSH;
	}
	public static get HURT_DROWN(): EntityEffect {
		return this.$javaClass.HURT_DROWN;
	}
	public static get HURT_EXPLOSION(): EntityEffect {
		return this.$javaClass.HURT_EXPLOSION;
	}
	public static get IRON_GOLEM_ROSE(): EntityEffect {
		return this.$javaClass.IRON_GOLEM_ROSE;
	}
	public static get IRON_GOLEM_SHEATH(): EntityEffect {
		return this.$javaClass.IRON_GOLEM_SHEATH;
	}
	public static get LOVE_HEARTS(): EntityEffect {
		return this.$javaClass.LOVE_HEARTS;
	}
	public static get PLAYER_BAD_OMEN_RAID(): EntityEffect {
		return this.$javaClass.PLAYER_BAD_OMEN_RAID;
	}
	public static get RABBIT_JUMP(): EntityEffect {
		return this.$javaClass.RABBIT_JUMP;
	}
	public static get RAVAGER_STUNNED(): EntityEffect {
		return this.$javaClass.RAVAGER_STUNNED;
	}
	public static get SHEEP_EAT(): EntityEffect {
		return this.$javaClass.SHEEP_EAT;
	}
	public static get SHIELD_BLOCK(): EntityEffect {
		return this.$javaClass.SHIELD_BLOCK;
	}
	public static get SHIELD_BREAK(): EntityEffect {
		return this.$javaClass.SHIELD_BREAK;
	}
	public static get SQUID_ROTATE(): EntityEffect {
		return this.$javaClass.SQUID_ROTATE;
	}
	public static get TELEPORT_ENDER(): EntityEffect {
		return this.$javaClass.TELEPORT_ENDER;
	}
	public static get THORNS_HURT(): EntityEffect {
		return this.$javaClass.THORNS_HURT;
	}
	public static get TOTEM_RESURRECT(): EntityEffect {
		return this.$javaClass.TOTEM_RESURRECT;
	}
	public static get VILLAGER_ANGRY(): EntityEffect {
		return this.$javaClass.VILLAGER_ANGRY;
	}
	public static get VILLAGER_HAPPY(): EntityEffect {
		return this.$javaClass.VILLAGER_HAPPY;
	}
	public static get VILLAGER_HEART(): EntityEffect {
		return this.$javaClass.VILLAGER_HEART;
	}
	public static get VILLAGER_SPLASH(): EntityEffect {
		return this.$javaClass.VILLAGER_SPLASH;
	}
	public static get WITCH_MAGIC(): EntityEffect {
		return this.$javaClass.WITCH_MAGIC;
	}
	public static get WOLF_HEARTS(): EntityEffect {
		return this.$javaClass.WOLF_HEARTS;
	}
	public static get WOLF_SHAKE(): EntityEffect {
		return this.$javaClass.WOLF_SHAKE;
	}
	public static get WOLF_SMOKE(): EntityEffect {
		return this.$javaClass.WOLF_SMOKE;
	}
	public static get ZOMBIE_TRANSFORM(): EntityEffect {
		return this.$javaClass.ZOMBIE_TRANSFORM;
	}
}

