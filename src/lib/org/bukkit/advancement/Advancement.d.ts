import Keyed from '../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
export default interface Advancement extends Keyed {
    getCriteria(): any;
    getKey(): NamespacedKey;
}
export default class Advancement {
    static get $javaClass(): any;
}
