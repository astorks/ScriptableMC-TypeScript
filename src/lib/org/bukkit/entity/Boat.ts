declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../org/bukkit/EntityEffect.js'
import EntityType from '../../../org/bukkit/entity/EntityType.js'
import Location from '../../../org/bukkit/Location.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Pose from '../../../org/bukkit/entity/Pose.js'
import Server from '../../../org/bukkit/Server.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import Vehicle from '../../../org/bukkit/entity/Vehicle.js'
import World from '../../../org/bukkit/World.js'

export default interface Boat extends Vehicle {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addPassenger(arg0: Entity): boolean;
	addScoreboardTag(arg0: string): boolean;
	eject(): boolean;
	getBoundingBox(): BoundingBox;
	getCustomName(): string;
	getEffectivePermissions(): any;
	getEntityId(): number;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getHeight(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMaxFireTicks(): number;
	getMaxSpeed(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getOccupiedDeceleration(): number;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getScoreboardTags(): any;
	getServer(): Server;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getUnoccupiedDeceleration(): number;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWidth(): number;
	getWoodType(): TreeSpecies;
	getWorkOnLand(): boolean;
	getWorld(): World;
	hasGravity(): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isGlowing(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPersistent(): boolean;
	isSilent(): boolean;
	isValid(): boolean;
	leaveVehicle(): boolean;
	playEffect(arg0: EntityEffect): void;
	recalculatePermissions(): void;
	remove(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePassenger(arg0: Entity): boolean;
	removeScoreboardTag(arg0: string): boolean;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setMaxSpeed(arg0: number): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setOccupiedDeceleration(arg0: number): void;
	setOp(arg0: boolean): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPortalCooldown(arg0: number): void;
	setRotation(arg0: number, arg1: number): void;
	setSilent(arg0: boolean): void;
	setTicksLived(arg0: number): void;
	setUnoccupiedDeceleration(arg0: number): void;
	setVelocity(arg0: Vector): void;
	setWoodType(arg0: TreeSpecies): void;
	setWorkOnLand(arg0: boolean): void;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}

export default class Boat {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Boat');
	}

}

