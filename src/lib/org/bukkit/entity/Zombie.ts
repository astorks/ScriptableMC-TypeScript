declare var Java: any;
import {Villager$Profession} from '../../../org/bukkit/entity/Villager$Profession.js'
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
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
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Monster} from '../../../org/bukkit/entity/Monster.js'

export interface Zombie extends Monster {
	setVillager(flag: boolean): void;
	isVillager(): boolean;
	setConversionTime(time: number): void;
	getConversionTime(): number;
	isBaby(): boolean;
	isConverting(): boolean;
	setBaby(flag: boolean): void;
	setVillagerProfession(profession: Villager$Profession): void;
	getVillagerProfession(): Villager$Profession;
	getTarget(): LivingEntity;
	setTarget(target: LivingEntity): void;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	getRemoveWhenFarAway(): boolean;
	setRemoveWhenFarAway(remove: boolean): void;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	setMaximumNoDamageTicks(ticks: number): void;
	getMaximumNoDamageTicks(): number;
	getActivePotionEffects(): any;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	getLineOfSight(transparent: any, maxDistance: number): any;
	getKiller(): Player;
	getEquipment(): EntityEquipment;
	setCanPickupItems(pickup: boolean): void;
	setRemainingAir(ticks: number): void;
	getMaximumAir(): number;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	setNoDamageTicks(ticks: number): void;
	hasPotionEffect(type: PotionEffectType): boolean;
	getRemainingAir(): number;
	getEyeHeight(ignorePose: boolean): number;
	getEyeHeight(): number;
	getEyeLocation(): Location;
	getLastDamage(): number;
	addPotionEffect(effect: PotionEffect): boolean;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	addPotionEffects(effects: any): boolean;
	removePotionEffect(type: PotionEffectType): void;
	setLastDamage(damage: number): void;
	isLeashed(): boolean;
	hasLineOfSight(other: Entity): boolean;
	getLeashHolder(): Entity;
	setLeashHolder(holder: Entity): boolean;
	setGliding(gliding: boolean): void;
	isSwimming(): boolean;
	getCanPickupItems(): boolean;
	setSwimming(swimming: boolean): void;
	isRiptiding(): boolean;
	setAI(ai: boolean): void;
	hasAI(): boolean;
	setCollidable(collidable: boolean): void;
	isCollidable(): boolean;
	isGliding(): boolean;
	setMaximumAir(ticks: number): void;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	getMemory(memoryKey: MemoryKey): any;
	getNoDamageTicks(): number;
	isSleeping(): boolean;
	getAttribute(attribute: Attribute): AttributeInstance;
	getHealth(): number;
	setHealth(health: number): void;
	setMaxHealth(health: number): void;
	getMaxHealth(): number;
	resetMaxHealth(): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(amount: number): void;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
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
	launchProjectile(projectile: any): Projectile;
	launchProjectile(projectile: any, velocity: Vector): Projectile;
	setSeed(seed: number): void;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(table: LootTable): void;
}

export class Zombie {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Zombie');
	}
}

