declare var Java: any;

export default interface Spellcaster$Spell {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Spellcaster$Spell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Spellcaster$Spell');
	}

	public static get NONE(): Spellcaster$Spell {
		return this.$javaClass.NONE;
	}
	public static get SUMMON_VEX(): Spellcaster$Spell {
		return this.$javaClass.SUMMON_VEX;
	}
	public static get FANGS(): Spellcaster$Spell {
		return this.$javaClass.FANGS;
	}
	public static get WOLOLO(): Spellcaster$Spell {
		return this.$javaClass.WOLOLO;
	}
	public static get DISAPPEAR(): Spellcaster$Spell {
		return this.$javaClass.DISAPPEAR;
	}
	public static get BLINDNESS(): Spellcaster$Spell {
		return this.$javaClass.BLINDNESS;
	}
}

