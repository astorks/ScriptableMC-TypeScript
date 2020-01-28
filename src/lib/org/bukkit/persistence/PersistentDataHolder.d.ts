import { PersistentDataContainer } from '../../../org/bukkit/persistence/PersistentDataContainer.js';
export interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}
export declare class PersistentDataHolder {
    static get $javaClass(): any;
}
