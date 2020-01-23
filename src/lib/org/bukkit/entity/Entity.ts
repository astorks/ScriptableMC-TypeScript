declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Metadatable} from '../../../org/bukkit/metadata/Metadatable.js'
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'
import {Nameable} from '../../../org/bukkit/Nameable.js'
import {PersistentDataHolder} from '../../../org/bukkit/persistence/PersistentDataHolder.js'

export interface Entity extends Metadatable, CommandSender, Nameable, PersistentDataHolder {
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	addPassenger(passenger: Entity): boolean;
	getPassengers(): any;
	getServer(): Server;
	getWorld(): World;
	isValid(): boolean;
	setCustomNameVisible(flag: boolean): void;
	removeScoreboardTag(tag: string): boolean;
	isCustomNameVisible(): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	getNearbyEntities(x: number, y: number, z: number): any;
	playEffect(type: EntityEffect): void;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(location: Location): boolean;
	teleport(destination: Entity): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	getMaxFireTicks(): number;
	isDead(): boolean;
	isPersistent(): boolean;
	getEntityId(): number;
	setFireTicks(ticks: number): void;
	setPersistent(persistent: boolean): void;
	getWidth(): number;
	getPassenger(): Entity;
	setRotation(yaw: number, pitch: number): void;
	getFireTicks(): number;
	setPassenger(passenger: Entity): boolean;
	getHeight(): number;
	getVelocity(): Vector;
	setVelocity(velocity: Vector): void;
	getBoundingBox(): BoundingBox;
	isOnGround(): boolean;
	getLastDamageCause(): EntityDamageEvent;
	leaveVehicle(): boolean;
	setGlowing(flag: boolean): void;
	isInsideVehicle(): boolean;
	setFallDistance(distance: number): void;
	setSilent(flag: boolean): void;
	setGravity(gravity: boolean): void;
	setLastDamageCause(event: EntityDamageEvent): void;
	getPortalCooldown(): number;
	getFacing(): BlockFace;
	isSilent(): boolean;
	getFallDistance(): number;
	isInvulnerable(): boolean;
	getScoreboardTags(): any;
	hasGravity(): boolean;
	getVehicle(): Entity;
	setPortalCooldown(cooldown: number): void;
	setTicksLived(value: number): void;
	getTicksLived(): number;
	isGlowing(): boolean;
	removePassenger(passenger: Entity): boolean;
	eject(): boolean;
	getUniqueId(): string;
	addScoreboardTag(tag: string): boolean;
	setInvulnerable(flag: boolean): void;
	getPose(): Pose;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	getName(): string;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	removeAttachment(attachment: PermissionAttachment): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
	isOp(): boolean;
	setOp(value: boolean): void;
	getCustomName(): string;
	setCustomName(_name: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class Entity {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Entity');
	}
}

