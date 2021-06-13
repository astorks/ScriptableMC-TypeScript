declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import Color from '../../../org/bukkit/Color.js'
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js'
import Entity from './Entity.js'
import Entity$Spigot from './Entity$Spigot.js'
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../org/bukkit/EntityEffect.js'
import EntityType from './EntityType.js'
import Location from '../../../org/bukkit/Location.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Particle from '../../../org/bukkit/Particle.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Pose from './Pose.js'
import PotionData from '../../../org/bukkit/potion/PotionData.js'
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'
import ProjectileSource from '../../../org/bukkit/projectiles/ProjectileSource.js'
import Server from '../../../org/bukkit/Server.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface AreaEffectCloud extends Entity {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPassenger(arg0: Entity): boolean;
	addScoreboardTag(arg0: string): boolean;
	clearCustomEffects(): void;
	eject(): boolean;
	getBasePotionData(): PotionData;
	getBoundingBox(): BoundingBox;
	getColor(): Color;
	getCustomEffects(): Array<PotionEffect>;
	getCustomName(): string;
	getDuration(): number;
	getDurationOnUse(): number;
	getEffectivePermissions(): any;
	getEntityId(): number;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getFreezeTicks(): number;
	getHeight(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMaxFireTicks(): number;
	getMaxFreezeTicks(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getParticle(): Particle;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getRadius(): number;
	getRadiusOnUse(): number;
	getRadiusPerTick(): number;
	getReapplicationDelay(): number;
	getScoreboardTags(): any;
	getServer(): Server;
	getSource(): ProjectileSource;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWaitTime(): number;
	getWidth(): number;
	getWorld(): World;
	hasCustomEffect(arg0: PotionEffectType): boolean;
	hasCustomEffects(): boolean;
	hasGravity(): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isFrozen(): boolean;
	isGlowing(): boolean;
	isInWater(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPermissionSet(arg0: string): boolean;
	isPersistent(): boolean;
	isSilent(): boolean;
	isValid(): boolean;
	isVisualFire(): boolean;
	leaveVehicle(): boolean;
	playEffect(arg0: EntityEffect): void;
	recalculatePermissions(): void;
	remove(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	removeCustomEffect(arg0: PotionEffectType): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePassenger(arg0: Entity): boolean;
	removeScoreboardTag(arg0: string): boolean;
	sendMessage(arg0: string): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string, arg1: Array<string>): void;
	sendMessage(arg0: string, arg1: string): void;
	setBasePotionData(arg0: PotionData): void;
	setColor(arg0: Color): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setDuration(arg0: number): void;
	setDurationOnUse(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setFreezeTicks(arg0: number): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setOp(arg0: boolean): void;
	setParticle(arg0: Particle): void;
	setParticle(arg0: Particle, arg1: any): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPortalCooldown(arg0: number): void;
	setRadius(arg0: number): void;
	setRadiusOnUse(arg0: number): void;
	setRadiusPerTick(arg0: number): void;
	setReapplicationDelay(arg0: number): void;
	setRotation(arg0: number, arg1: number): void;
	setSilent(arg0: boolean): void;
	setSource(arg0: ProjectileSource): void;
	setTicksLived(arg0: number): void;
	setVelocity(arg0: Vector): void;
	setVisualFire(arg0: boolean): void;
	setWaitTime(arg0: number): void;
	spigot(): CommandSender$Spigot;
	spigot(): Entity$Spigot;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}

export default class AreaEffectCloud {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.AreaEffectCloud');
	}

}

