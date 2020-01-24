declare var Java: any;
import {Color} from '../../../org/bukkit/Color.js'
import {PotionData} from '../../../org/bukkit/potion/PotionData.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {AbstractArrow$PickupStatus} from '../../../org/bukkit/entity/AbstractArrow$PickupStatus.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {ProjectileSource} from '../../../org/bukkit/projectiles/ProjectileSource.js'
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {AbstractArrow} from '../../../org/bukkit/entity/AbstractArrow.js'

export interface Arrow extends AbstractArrow {
	getColor(): Color;
	clearCustomEffects(): void;
	setBasePotionData(data: PotionData): void;
	setColor(color: Color): void;
	hasCustomEffect(type: PotionEffectType): boolean;
	getCustomEffects(): any;
	removeCustomEffect(type: PotionEffectType): boolean;
	hasCustomEffects(): boolean;
	addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
	getBasePotionData(): PotionData;
	getDamage(): number;
	setDamage(damage: number): void;
	setPickupStatus(status: AbstractArrow$PickupStatus): void;
	setCritical(critical: boolean): void;
	getPierceLevel(): number;
	setPierceLevel(pierceLevel: number): void;
	isCritical(): boolean;
	getAttachedBlock(): Block;
	getPickupStatus(): AbstractArrow$PickupStatus;
	isInBlock(): boolean;
	setKnockbackStrength(knockbackStrength: number): void;
	getKnockbackStrength(): number;
	setShooter(source: ProjectileSource): void;
	doesBounce(): boolean;
	setBounce(doesBounce: boolean): void;
	getShooter(): ProjectileSource;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	getServer(): Server;
	isValid(): boolean;
	getWorld(): World;
	getEntityId(): number;
	isInsideVehicle(): boolean;
	setGlowing(flag: boolean): void;
	isGlowing(): boolean;
	leaveVehicle(): boolean;
	getBoundingBox(): BoundingBox;
	isInvulnerable(): boolean;
	isSilent(): boolean;
	getPortalCooldown(): number;
	getVehicle(): Entity;
	getFacing(): BlockFace;
	addPassenger(passenger: Entity): boolean;
	setSilent(flag: boolean): void;
	getPose(): Pose;
	getFallDistance(): number;
	setRotation(yaw: number, pitch: number): void;
	getLastDamageCause(): EntityDamageEvent;
	setInvulnerable(flag: boolean): void;
	setPersistent(persistent: boolean): void;
	getMaxFireTicks(): number;
	isPersistent(): boolean;
	getPassenger(): Entity;
	setGravity(gravity: boolean): void;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(location: Location): boolean;
	teleport(destination: Entity): boolean;
	getHeight(): number;
	setPortalCooldown(cooldown: number): void;
	isDead(): boolean;
	getNearbyEntities(x: number, y: number, z: number): any;
	getScoreboardTags(): any;
	setVelocity(velocity: Vector): void;
	addScoreboardTag(tag: string): boolean;
	setPassenger(passenger: Entity): boolean;
	hasGravity(): boolean;
	isOnGround(): boolean;
	getTicksLived(): number;
	setTicksLived(value: number): void;
	setFallDistance(distance: number): void;
	getPassengers(): any;
	getFireTicks(): number;
	setFireTicks(ticks: number): void;
	removePassenger(passenger: Entity): boolean;
	eject(): boolean;
	setLastDamageCause(event: EntityDamageEvent): void;
	getVelocity(): Vector;
	getWidth(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	setCustomNameVisible(flag: boolean): void;
	isCustomNameVisible(): boolean;
	removeScoreboardTag(tag: string): boolean;
	playEffect(type: EntityEffect): void;
	getUniqueId(): string;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	getName(): string;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(perm: Permission): boolean;
	hasPermission(_name: string): boolean;
	getEffectivePermissions(): any;
	recalculatePermissions(): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(perm: Permission): boolean;
	isPermissionSet(_name: string): boolean;
	isOp(): boolean;
	setOp(value: boolean): void;
	getCustomName(): string;
	setCustomName(_name: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
}

export class Arrow {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Arrow');
	}
}

