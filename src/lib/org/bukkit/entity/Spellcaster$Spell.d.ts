export default interface Spellcaster$Spell {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Spellcaster$Spell {
    static get $javaClass(): any;
    static get NONE(): Spellcaster$Spell;
    static get SUMMON_VEX(): Spellcaster$Spell;
    static get FANGS(): Spellcaster$Spell;
    static get WOLOLO(): Spellcaster$Spell;
    static get DISAPPEAR(): Spellcaster$Spell;
    static get BLINDNESS(): Spellcaster$Spell;
}
