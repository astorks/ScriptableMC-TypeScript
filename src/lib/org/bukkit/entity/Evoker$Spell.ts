declare var Java: any;

export default interface Evoker$Spell {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class Evoker$Spell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Evoker$Spell');
	}

	public static get NONE(): Evoker$Spell {
		return this.$javaClass.NONE;
	}
	public static get SUMMON(): Evoker$Spell {
		return this.$javaClass.SUMMON;
	}
	public static get FANGS(): Evoker$Spell {
		return this.$javaClass.FANGS;
	}
	public static get WOLOLO(): Evoker$Spell {
		return this.$javaClass.WOLOLO;
	}
	public static get DISAPPEAR(): Evoker$Spell {
		return this.$javaClass.DISAPPEAR;
	}
	public static get BLINDNESS(): Evoker$Spell {
		return this.$javaClass.BLINDNESS;
	}
}

