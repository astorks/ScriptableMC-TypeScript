import { HumanEntity } from '../../../org/bukkit/entity/HumanEntity.js';
import { Entity } from '../../../org/bukkit/entity/Entity.js';
import { Location } from '../../../org/bukkit/Location.js';
export interface LootContext {
    getKiller(): HumanEntity;
    getLuck(): number;
    getLootingModifier(): number;
    getLootedEntity(): Entity;
    getLocation(): Location;
}
export declare class LootContext {
    static get $javaClass(): any;
    static get DEFAULT_LOOT_MODIFIER(): number;
}
