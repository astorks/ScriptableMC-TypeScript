import { PersistentDataContainer } from '../../../org/bukkit/persistence/PersistentDataContainer.js';
export interface PersistentDataAdapterContext {
    newPersistentDataContainer(): PersistentDataContainer;
}
export declare class PersistentDataAdapterContext {
    static get $javaClass(): any;
}
