declare var Java: any;
import AbstractArrow from './AbstractArrow.js'
import AbstractArrow$PickupStatus from './AbstractArrow$PickupStatus.js'
import Block from '../../../org/bukkit/block/Block.js'
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

export default interface Arrow extends AbstractArrow {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPassenger(arg0: Entity): boolean;
	addScoreboardTag(arg0: string): boolean;
	clearCustomEffects(): void;
	doesBounce(): boolean;
	eject(): boolean;
	getAttachedBlock(): Block;
	getBasePotionData(): PotionData;
	getBoundingBox(): BoundingBox;
	getColor(): Color;
	getCustomEffects(): Array<PotionEffect>;
	getCustomName(): string;
	getDamage(): number;
	getEffectivePermissions(): any;
	getEntityId(): number;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getFreezeTicks(): number;
	getHeight(): number;
	getKnockbackStrength(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMaxFireTicks(): number;
	getMaxFreezeTicks(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPickupStatus(): AbstractArrow$PickupStatus;
	getPierceLevel(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getScoreboardTags(): any;
	getServer(): Server;
	getShooter(): ProjectileSource;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWidth(): number;
	getWorld(): World;
	hasCustomEffect(arg0: PotionEffectType): boolean;
	hasCustomEffects(): boolean;
	hasGravity(): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	isCritical(): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isFrozen(): boolean;
	isGlowing(): boolean;
	isInBlock(): boolean;
	isInWater(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPermissionSet(arg0: string): boolean;
	isPersistent(): boolean;
	isShotFromCrossbow(): boolean;
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
	setBounce(arg0: boolean): void;
	setColor(arg0: Color): void;
	setCritical(arg0: boolean): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setDamage(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setFreezeTicks(arg0: number): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setKnockbackStrength(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setOp(arg0: boolean): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPickupStatus(arg0: AbstractArrow$PickupStatus): void;
	setPierceLevel(arg0: number): void;
	setPortalCooldown(arg0: number): void;
	setRotation(arg0: number, arg1: number): void;
	setShooter(arg0: ProjectileSource): void;
	setShotFromCrossbow(arg0: boolean): void;
	setSilent(arg0: boolean): void;
	setTicksLived(arg0: number): void;
	setVelocity(arg0: Vector): void;
	setVisualFire(arg0: boolean): void;
	spigot(): CommandSender$Spigot;
	spigot(): Entity$Spigot;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}

export default class Arrow {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Arrow');
	}

}

