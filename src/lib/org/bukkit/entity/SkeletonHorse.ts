declare var Java: any;
import AbstractHorse from './AbstractHorse.js'
import AbstractHorseInventory from '../../../org/bukkit/inventory/AbstractHorseInventory.js'
import AnimalTamer from './AnimalTamer.js'
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js'
import Block from '../../../org/bukkit/block/Block.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js'
import Entity from './Entity.js'
import Entity$Spigot from './Entity$Spigot.js'
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../org/bukkit/EntityEffect.js'
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js'
import EntityType from './EntityType.js'
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js'
import Horse$Variant from './Horse$Variant.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import LivingEntity from './LivingEntity.js'
import Location from '../../../org/bukkit/Location.js'
import LootTable from '../../../org/bukkit/loot/LootTable.js'
import MemoryKey from './memory/MemoryKey.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import Player from './Player.js'
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Pose from './Pose.js'
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'
import Projectile from './Projectile.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Server from '../../../org/bukkit/Server.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface SkeletonHorse extends AbstractHorse {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addPassenger(arg0: Entity): boolean;
	addPotionEffect(arg0: PotionEffect): boolean;
	addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPotionEffects(arg0: Array<any>): boolean;
	addScoreboardTag(arg0: string): boolean;
	attack(arg0: Entity): void;
	canBreed(): boolean;
	damage(arg0: number): void;
	damage(arg0: number, arg1: Entity): void;
	eject(): boolean;
	getAbsorptionAmount(): number;
	getActivePotionEffects(): Array<PotionEffect>;
	getAge(): number;
	getAgeLock(): boolean;
	getAttribute(arg0: Attribute): AttributeInstance;
	getBoundingBox(): BoundingBox;
	getBreedCause(): string;
	getCanPickupItems(): boolean;
	getCollidableExemptions(): any;
	getCustomName(): string;
	getDomestication(): number;
	getEffectivePermissions(): any;
	getEntityId(): number;
	getEquipment(): EntityEquipment;
	getEyeHeight(): number;
	getEyeHeight(arg0: boolean): number;
	getEyeLocation(): Location;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getHealth(): number;
	getHeight(): number;
	getInventory(): Inventory;
	getInventory(): AbstractHorseInventory;
	getJumpStrength(): number;
	getKiller(): Player;
	getLastDamage(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
	getLeashHolder(): Entity;
	getLineOfSight(arg0: any, arg1: number): Array<Block>;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getLootTable(): LootTable;
	getLoveModeTicks(): number;
	getMaxDomestication(): number;
	getMaxFireTicks(): number;
	getMaxHealth(): number;
	getMaximumAir(): number;
	getMaximumNoDamageTicks(): number;
	getMemory(arg0: MemoryKey): any;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getNoDamageTicks(): number;
	getOwner(): AnimalTamer;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getPotionEffect(arg0: PotionEffectType): PotionEffect;
	getRemainingAir(): number;
	getRemoveWhenFarAway(): boolean;
	getScoreboardTags(): any;
	getSeed(): number;
	getServer(): Server;
	getTarget(): LivingEntity;
	getTargetBlock(arg0: any, arg1: number): Block;
	getTargetBlockExact(arg0: number): Block;
	getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getVariant(): Horse$Variant;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWidth(): number;
	getWorld(): World;
	hasAI(): boolean;
	hasGravity(): boolean;
	hasLineOfSight(arg0: Entity): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	hasPotionEffect(arg0: PotionEffectType): boolean;
	isAdult(): boolean;
	isAware(): boolean;
	isCollidable(): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isGliding(): boolean;
	isGlowing(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isLeashed(): boolean;
	isLoveMode(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPersistent(): boolean;
	isRiptiding(): boolean;
	isSilent(): boolean;
	isSleeping(): boolean;
	isSwimming(): boolean;
	isTamed(): boolean;
	isValid(): boolean;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
	leaveVehicle(): boolean;
	playEffect(arg0: EntityEffect): void;
	rayTraceBlocks(arg0: number): RayTraceResult;
	rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
	recalculatePermissions(): void;
	remove(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePassenger(arg0: Entity): boolean;
	removePotionEffect(arg0: PotionEffectType): void;
	removeScoreboardTag(arg0: string): boolean;
	resetMaxHealth(): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	setAI(arg0: boolean): void;
	setAbsorptionAmount(arg0: number): void;
	setAdult(): void;
	setAge(arg0: number): void;
	setAgeLock(arg0: boolean): void;
	setAware(arg0: boolean): void;
	setBaby(): void;
	setBreed(arg0: boolean): void;
	setBreedCause(arg0: string): void;
	setCanPickupItems(arg0: boolean): void;
	setCollidable(arg0: boolean): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setDomestication(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setGliding(arg0: boolean): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setHealth(arg0: number): void;
	setInvulnerable(arg0: boolean): void;
	setJumpStrength(arg0: number): void;
	setLastDamage(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setLeashHolder(arg0: Entity): boolean;
	setLootTable(arg0: LootTable): void;
	setLoveModeTicks(arg0: number): void;
	setMaxDomestication(arg0: number): void;
	setMaxHealth(arg0: number): void;
	setMaximumAir(arg0: number): void;
	setMaximumNoDamageTicks(arg0: number): void;
	setMemory(arg0: MemoryKey, arg1: any): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setNoDamageTicks(arg0: number): void;
	setOp(arg0: boolean): void;
	setOwner(arg0: AnimalTamer): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPortalCooldown(arg0: number): void;
	setRemainingAir(arg0: number): void;
	setRemoveWhenFarAway(arg0: boolean): void;
	setRotation(arg0: number, arg1: number): void;
	setSeed(arg0: number): void;
	setSilent(arg0: boolean): void;
	setSwimming(arg0: boolean): void;
	setTamed(arg0: boolean): void;
	setTarget(arg0: LivingEntity): void;
	setTicksLived(arg0: number): void;
	setVariant(arg0: Horse$Variant): void;
	setVelocity(arg0: Vector): void;
	spigot(): Entity$Spigot;
	spigot(): CommandSender$Spigot;
	swingMainHand(): void;
	swingOffHand(): void;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}

export default class SkeletonHorse {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.SkeletonHorse');
	}

}

