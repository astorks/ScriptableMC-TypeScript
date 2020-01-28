import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface Villager$Profession extends Keyed {
    getKey(): NamespacedKey;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Villager$Profession {
    static get $javaClass(): any;
    static get NONE(): Villager$Profession;
    static get ARMORER(): Villager$Profession;
    static get BUTCHER(): Villager$Profession;
    static get CARTOGRAPHER(): Villager$Profession;
    static get CLERIC(): Villager$Profession;
    static get FARMER(): Villager$Profession;
    static get FISHERMAN(): Villager$Profession;
    static get FLETCHER(): Villager$Profession;
    static get LEATHERWORKER(): Villager$Profession;
    static get LIBRARIAN(): Villager$Profession;
    static get MASON(): Villager$Profession;
    static get NITWIT(): Villager$Profession;
    static get SHEPHERD(): Villager$Profession;
    static get TOOLSMITH(): Villager$Profession;
    static get WEAPONSMITH(): Villager$Profession;
}
