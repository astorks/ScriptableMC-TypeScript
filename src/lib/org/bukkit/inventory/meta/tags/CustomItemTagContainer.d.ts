import ItemTagAdapterContext from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js';
import ItemTagType from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js';
import NamespacedKey from '../../../../../org/bukkit/NamespacedKey.js';
export default interface CustomItemTagContainer {
    isEmpty(): boolean;
    getAdapterContext(): ItemTagAdapterContext;
    removeCustomTag(arg0: NamespacedKey): void;
    setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: any): void;
    getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): any;
    hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
}
export default class CustomItemTagContainer {
    static get $javaClass(): any;
}
