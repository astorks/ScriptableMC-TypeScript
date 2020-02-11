import Entity from '../../../org/bukkit/entity/Entity.js';
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import Location from '../../../org/bukkit/Location.js';
export default interface LootContext {
    getLocation(): Location;
    getKiller(): HumanEntity;
    getLuck(): number;
    getLootingModifier(): number;
    getLootedEntity(): Entity;
}
export default class LootContext {
    static get $javaClass(): any;
    static get DEFAULT_LOOT_MODIFIER(): number;
}
