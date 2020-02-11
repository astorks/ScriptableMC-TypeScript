import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import PersistentDataAdapterContext from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js';
import PersistentDataType from '../../../org/bukkit/persistence/PersistentDataType.js';
export default interface PersistentDataContainer {
    remove(arg0: NamespacedKey): void;
    get(arg0: NamespacedKey, arg1: PersistentDataType): any;
    isEmpty(): boolean;
    set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): void;
    getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): any;
    has(arg0: NamespacedKey, arg1: PersistentDataType): boolean;
    getAdapterContext(): PersistentDataAdapterContext;
}
export default class PersistentDataContainer {
    static get $javaClass(): any;
}
