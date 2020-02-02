import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
export default interface PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
}
export default class PersistentDataHolder {
    static get $javaClass(): any;
}
