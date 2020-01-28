import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface Villager$Type extends Keyed {
    getKey(): NamespacedKey;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class Villager$Type {
    static get $javaClass(): any;
    static get DESERT(): Villager$Type;
    static get JUNGLE(): Villager$Type;
    static get PLAINS(): Villager$Type;
    static get SAVANNA(): Villager$Type;
    static get SNOW(): Villager$Type;
    static get SWAMP(): Villager$Type;
    static get TAIGA(): Villager$Type;
}
