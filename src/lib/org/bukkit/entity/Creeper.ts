declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
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
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Monster} from '../../../org/bukkit/entity/Monster.js'

export interface Creeper extends Monster {
	setExplosionRadius(radius: number): void;
	getExplosionRadius(): number;
	explode(): void;
	ignite(): void;
	getMaxFuseTicks(): number;
	isPowered(): boolean;
	setPowered(value: boolean): void;
	setMaxFuseTicks(ticks: number): void;
	getTarget(): LivingEntity;
	setTarget(target: LivingEntity): void;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	getEyeLocation(): Location;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	setNoDamageTicks(ticks: number): void;
	addPotionEffect(effect: PotionEffect): boolean;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	getMaximumAir(): number;
	setMaximumAir(ticks: number): void;
	getLastDamage(): number;
	setLastDamage(damage: number): void;
	getLineOfSight(transparent: any, maxDistance: number): any;
	setRemainingAir(ticks: number): void;
	getRemainingAir(): number;
	getEyeHeight(): number;
	getEyeHeight(ignorePose: boolean): number;
	getNoDamageTicks(): number;
	getKiller(): Player;
	addPotionEffects(effects: any): boolean;
	hasPotionEffect(type: PotionEffectType): boolean;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	removePotionEffect(type: PotionEffectType): void;
	getRemoveWhenFarAway(): boolean;
	setMaximumNoDamageTicks(ticks: number): void;
	setRemoveWhenFarAway(remove: boolean): void;
	getMaximumNoDamageTicks(): number;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	getActivePotionEffects(): any;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	isSwimming(): boolean;
	isRiptiding(): boolean;
	setGliding(gliding: boolean): void;
	setAI(ai: boolean): void;
	hasLineOfSight(other: Entity): boolean;
	isGliding(): boolean;
	setCanPickupItems(pickup: boolean): void;
	getLeashHolder(): Entity;
	setSwimming(swimming: boolean): void;
	getMemory(memoryKey: MemoryKey): any;
	setLeashHolder(holder: Entity): boolean;
	setCollidable(collidable: boolean): void;
	getEquipment(): EntityEquipment;
	hasAI(): boolean;
	isLeashed(): boolean;
	isCollidable(): boolean;
	getCanPickupItems(): boolean;
	isSleeping(): boolean;
	getAttribute(attribute: Attribute): AttributeInstance;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(amount: number): void;
	getMaxHealth(): number;
	resetMaxHealth(): void;
	setHealth(health: number): void;
	getHealth(): number;
	setMaxHealth(health: number): void;
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
	launchProjectile(projectile: any): Projectile;
	launchProjectile(projectile: any, velocity: Vector): Projectile;
	getLootTable(): LootTable;
	getSeed(): number;
	setSeed(seed: number): void;
	setLootTable(table: LootTable): void;
}

export class Creeper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Creeper');
	}
}

