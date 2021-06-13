declare var Java: any;

export default interface Spellcaster$Spell {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Spellcaster$Spell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Spellcaster$Spell');
	}

	public static get BLINDNESS(): Spellcaster$Spell {
		return this.$javaClass.BLINDNESS;
	}
	public static get DISAPPEAR(): Spellcaster$Spell {
		return this.$javaClass.DISAPPEAR;
	}
	public static get FANGS(): Spellcaster$Spell {
		return this.$javaClass.FANGS;
	}
	public static get NONE(): Spellcaster$Spell {
		return this.$javaClass.NONE;
	}
	public static get SUMMON_VEX(): Spellcaster$Spell {
		return this.$javaClass.SUMMON_VEX;
	}
	public static get WOLOLO(): Spellcaster$Spell {
		return this.$javaClass.WOLOLO;
	}
	public static valueOf(arg0: string): Spellcaster$Spell;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Spellcaster$Spell.$javaClass.valueOf(...args);
	}

	public static values(): Array<Spellcaster$Spell>;
	public static values(...args: any[]): any {
		return Spellcaster$Spell.$javaClass.values(...args);
	}

}

