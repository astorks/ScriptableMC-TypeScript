declare var Java: any;
import Entity from '../../../org/bukkit/entity/Entity.js'
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Location from '../../../org/bukkit/Location.js'

export default interface LootContext {
	getKiller(): HumanEntity;
	getLocation(): Location;
	getLootedEntity(): Entity;
	getLootingModifier(): number;
	getLuck(): number;
}

export default class LootContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.loot.LootContext');
	}

	public static get DEFAULT_LOOT_MODIFIER(): number {
		return LootContext.$javaClass.DEFAULT_LOOT_MODIFIER;
	}

}

