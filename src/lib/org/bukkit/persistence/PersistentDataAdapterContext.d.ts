import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
export default interface PersistentDataAdapterContext {
    newPersistentDataContainer(): PersistentDataContainer;
}
export default class PersistentDataAdapterContext {
    static get $javaClass(): any;
}
