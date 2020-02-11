export default interface Evoker$Spell {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Evoker$Spell {
    static get $javaClass(): any;
    static get NONE(): Evoker$Spell;
    static get SUMMON(): Evoker$Spell;
    static get FANGS(): Evoker$Spell;
    static get WOLOLO(): Evoker$Spell;
    static get DISAPPEAR(): Evoker$Spell;
    static get BLINDNESS(): Evoker$Spell;
}
