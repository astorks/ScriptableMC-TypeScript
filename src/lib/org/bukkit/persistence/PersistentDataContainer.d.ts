import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import PersistentDataAdapterContext from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js';
import PersistentDataType from '../../../org/bukkit/persistence/PersistentDataType.js';
export default interface PersistentDataContainer {
    has(arg0: NamespacedKey, arg1: PersistentDataType): boolean;
    getAdapterContext(): PersistentDataAdapterContext;
    remove(arg0: NamespacedKey): void;
    get(arg0: NamespacedKey, arg1: PersistentDataType): any;
    isEmpty(): boolean;
    getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): any;
    set(arg0: NamespacedKey, arg1: PersistentDataType, arg2: any): void;
}
export default class PersistentDataContainer {
    static get $javaClass(): any;
}
