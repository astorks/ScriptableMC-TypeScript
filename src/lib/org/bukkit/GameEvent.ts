declare var Java: any;
import Keyed from './Keyed.js'
import NamespacedKey from './NamespacedKey.js'

export default interface GameEvent extends Keyed {
	getKey(): NamespacedKey;
}

export default class GameEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.GameEvent');
	}

	public static get BLOCK_ATTACH(): GameEvent {
		return GameEvent.$javaClass.BLOCK_ATTACH;
	}

	public static get BLOCK_CHANGE(): GameEvent {
		return GameEvent.$javaClass.BLOCK_CHANGE;
	}

	public static get BLOCK_CLOSE(): GameEvent {
		return GameEvent.$javaClass.BLOCK_CLOSE;
	}

	public static get BLOCK_DESTROY(): GameEvent {
		return GameEvent.$javaClass.BLOCK_DESTROY;
	}

	public static get BLOCK_DETACH(): GameEvent {
		return GameEvent.$javaClass.BLOCK_DETACH;
	}

	public static get BLOCK_OPEN(): GameEvent {
		return GameEvent.$javaClass.BLOCK_OPEN;
	}

	public static get BLOCK_PLACE(): GameEvent {
		return GameEvent.$javaClass.BLOCK_PLACE;
	}

	public static get BLOCK_PRESS(): GameEvent {
		return GameEvent.$javaClass.BLOCK_PRESS;
	}

	public static get BLOCK_SWITCH(): GameEvent {
		return GameEvent.$javaClass.BLOCK_SWITCH;
	}

	public static get BLOCK_UNPRESS(): GameEvent {
		return GameEvent.$javaClass.BLOCK_UNPRESS;
	}

	public static get BLOCK_UNSWITCH(): GameEvent {
		return GameEvent.$javaClass.BLOCK_UNSWITCH;
	}

	public static get CONTAINER_CLOSE(): GameEvent {
		return GameEvent.$javaClass.CONTAINER_CLOSE;
	}

	public static get CONTAINER_OPEN(): GameEvent {
		return GameEvent.$javaClass.CONTAINER_OPEN;
	}

	public static get DISPENSE_FAIL(): GameEvent {
		return GameEvent.$javaClass.DISPENSE_FAIL;
	}

	public static get DRINKING_FINISH(): GameEvent {
		return GameEvent.$javaClass.DRINKING_FINISH;
	}

	public static get EAT(): GameEvent {
		return GameEvent.$javaClass.EAT;
	}

	public static get ELYTRA_FREE_FALL(): GameEvent {
		return GameEvent.$javaClass.ELYTRA_FREE_FALL;
	}

	public static get ENTITY_DAMAGED(): GameEvent {
		return GameEvent.$javaClass.ENTITY_DAMAGED;
	}

	public static get ENTITY_KILLED(): GameEvent {
		return GameEvent.$javaClass.ENTITY_KILLED;
	}

	public static get ENTITY_PLACE(): GameEvent {
		return GameEvent.$javaClass.ENTITY_PLACE;
	}

	public static get EQUIP(): GameEvent {
		return GameEvent.$javaClass.EQUIP;
	}

	public static get EXPLODE(): GameEvent {
		return GameEvent.$javaClass.EXPLODE;
	}

	public static get FISHING_ROD_CAST(): GameEvent {
		return GameEvent.$javaClass.FISHING_ROD_CAST;
	}

	public static get FISHING_ROD_REEL_IN(): GameEvent {
		return GameEvent.$javaClass.FISHING_ROD_REEL_IN;
	}

	public static get FLAP(): GameEvent {
		return GameEvent.$javaClass.FLAP;
	}

	public static get FLUID_PICKUP(): GameEvent {
		return GameEvent.$javaClass.FLUID_PICKUP;
	}

	public static get FLUID_PLACE(): GameEvent {
		return GameEvent.$javaClass.FLUID_PLACE;
	}

	public static get HIT_GROUND(): GameEvent {
		return GameEvent.$javaClass.HIT_GROUND;
	}

	public static get LIGHTNING_STRIKE(): GameEvent {
		return GameEvent.$javaClass.LIGHTNING_STRIKE;
	}

	public static get MINECART_MOVING(): GameEvent {
		return GameEvent.$javaClass.MINECART_MOVING;
	}

	public static get MOB_INTERACT(): GameEvent {
		return GameEvent.$javaClass.MOB_INTERACT;
	}

	public static get PISTON_CONTRACT(): GameEvent {
		return GameEvent.$javaClass.PISTON_CONTRACT;
	}

	public static get PISTON_EXTEND(): GameEvent {
		return GameEvent.$javaClass.PISTON_EXTEND;
	}

	public static get PRIME_FUSE(): GameEvent {
		return GameEvent.$javaClass.PRIME_FUSE;
	}

	public static get PROJECTILE_LAND(): GameEvent {
		return GameEvent.$javaClass.PROJECTILE_LAND;
	}

	public static get PROJECTILE_SHOOT(): GameEvent {
		return GameEvent.$javaClass.PROJECTILE_SHOOT;
	}

	public static get RAVAGER_ROAR(): GameEvent {
		return GameEvent.$javaClass.RAVAGER_ROAR;
	}

	public static get RING_BELL(): GameEvent {
		return GameEvent.$javaClass.RING_BELL;
	}

	public static get SHEAR(): GameEvent {
		return GameEvent.$javaClass.SHEAR;
	}

	public static get SHULKER_CLOSE(): GameEvent {
		return GameEvent.$javaClass.SHULKER_CLOSE;
	}

	public static get SHULKER_OPEN(): GameEvent {
		return GameEvent.$javaClass.SHULKER_OPEN;
	}

	public static get SPLASH(): GameEvent {
		return GameEvent.$javaClass.SPLASH;
	}

	public static get STEP(): GameEvent {
		return GameEvent.$javaClass.STEP;
	}

	public static get SWIM(): GameEvent {
		return GameEvent.$javaClass.SWIM;
	}

	public static get WOLF_SHAKING(): GameEvent {
		return GameEvent.$javaClass.WOLF_SHAKING;
	}

	public static getByKey(namespacedKey: NamespacedKey): GameEvent;
	public static getByKey(...args: any[]): any {
		return GameEvent.$javaClass.getByKey(...args);
	}

	public static values(): Array<GameEvent>;
	public static values(...args: any[]): any {
		return GameEvent.$javaClass.values(...args);
	}

}

