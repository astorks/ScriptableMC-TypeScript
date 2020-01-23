declare var Java: any;
import {ProjectileSource} from '../../../org/bukkit/projectiles/ProjectileSource.js'
import {Color} from '../../../org/bukkit/Color.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {PotionData} from '../../../org/bukkit/potion/PotionData.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Location} from '../../../org/bukkit/Location.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
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

export interface AreaEffectCloud extends Entity {
	getSource(): ProjectileSource;
	setColor(color: Color): void;
	getColor(): Color;
	hasCustomEffect(type: PotionEffectType): boolean;
	clearCustomEffects(): void;
	getBasePotionData(): PotionData;
	getCustomEffects(): any;
	hasCustomEffects(): boolean;
	removeCustomEffect(type: PotionEffectType): boolean;
	setBasePotionData(data: PotionData): void;
	addCustomEffect(effect: PotionEffect, overwrite: boolean): boolean;
	getDuration(): number;
	setSource(source: ProjectileSource): void;
	setReapplicationDelay(delay: number): void;
	getReapplicationDelay(): number;
	setDuration(duration: number): void;
	setRadius(radius: number): void;
	getRadius(): number;
	getWaitTime(): number;
	setWaitTime(waitTime: number): void;
	getDurationOnUse(): number;
	setDurationOnUse(duration: number): void;
	getRadiusOnUse(): number;
	setParticle(particle: Particle): void;
	setParticle(particle: Particle, data: any): void;
	setRadiusPerTick(radius: number): void;
	getParticle(): Particle;
	setRadiusOnUse(radius: number): void;
	getRadiusPerTick(): number;
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

export class AreaEffectCloud {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AreaEffectCloud');
	}
}

