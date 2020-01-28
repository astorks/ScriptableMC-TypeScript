import { ItemTagAdapterContext } from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js';
import { NamespacedKey } from '../../../../../org/bukkit/NamespacedKey.js';
import { ItemTagType } from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js';
export interface CustomItemTagContainer {
    getAdapterContext(): ItemTagAdapterContext;
    getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): any;
    setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: any): void;
    removeCustomTag(arg0: NamespacedKey): void;
    hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
    isEmpty(): boolean;
}
export declare class CustomItemTagContainer {
    static get $javaClass(): any;
}
