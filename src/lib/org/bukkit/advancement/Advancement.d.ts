import { NamespacedKey } from '../../../org/bukkit/NamespacedKey.js';
import { Keyed } from '../../../org/bukkit/Keyed.js';
export interface Advancement extends Keyed {
    getCriteria(): any;
    getKey(): NamespacedKey;
}
export declare class Advancement {
    static get $javaClass(): any;
}
