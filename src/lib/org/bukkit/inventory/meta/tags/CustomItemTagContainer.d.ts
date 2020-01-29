import { NamespacedKey } from '../../../../../org/bukkit/NamespacedKey.js';
import { ItemTagType } from '../../../../../org/bukkit/inventory/meta/tags/ItemTagType.js';
import { ItemTagAdapterContext } from '../../../../../org/bukkit/inventory/meta/tags/ItemTagAdapterContext.js';
export interface CustomItemTagContainer {
    isEmpty(): boolean;
    hasCustomTag(arg0: NamespacedKey, arg1: ItemTagType): boolean;
    getCustomTag(arg0: NamespacedKey, arg1: ItemTagType): any;
    setCustomTag(arg0: NamespacedKey, arg1: ItemTagType, arg2: any): void;
    removeCustomTag(arg0: NamespacedKey): void;
    getAdapterContext(): ItemTagAdapterContext;
}
export declare class CustomItemTagContainer {
    static get $javaClass(): any;
}
