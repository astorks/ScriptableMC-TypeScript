declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityEvent from './EntityEvent.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Spellcaster from '../../../../org/bukkit/entity/Spellcaster.js'
import Spellcaster$Spell from '../../../../org/bukkit/entity/Spellcaster$Spell.js'

export default interface EntitySpellCastEvent extends EntityEvent, Cancellable {
	getEntity(): Entity;
	getEntity(): Spellcaster;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getSpell(): Spellcaster$Spell;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancelled: boolean): void;
}

export default class EntitySpellCastEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.entity.EntitySpellCastEvent');
	}

	constructor(what: Spellcaster, spell: Spellcaster$Spell);
	constructor(...args: any[]) {
		return new EntitySpellCastEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return EntitySpellCastEvent.$javaClass.getHandlerList(...args);
	}

}

