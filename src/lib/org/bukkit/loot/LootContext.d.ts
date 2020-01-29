import { Location } from '../../../org/bukkit/Location.js';
import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
import { Entity } from '../../../org/bukkit/entity/Entity.js';
export interface LootContext {
    getLocation(): Location;
    getKiller(): HumanEntity;
    getLootingModifier(): number;
    getLootedEntity(): Entity;
    getLuck(): number;
}
export declare class LootContext {
    static get $javaClass(): any;
    static get DEFAULT_LOOT_MODIFIER(): number;
}
