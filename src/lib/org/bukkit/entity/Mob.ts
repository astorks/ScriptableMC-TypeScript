declare var Java: any;
import {LivingEntity} from '../../../org/bukkit/entity/LivingEntity.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {Player} from '../../../org/bukkit/entity/Player.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {LootTable} from '../../../org/bukkit/loot/LootTable.js'
import {Lootable} from '../../../org/bukkit/loot/Lootable.js'

export interface Mob extends LivingEntity, Lootable {
	getTarget(): LivingEntity;
	setTarget(arg0: LivingEntity): void;
	getEyeHeight(): number;
	getEyeHeight(arg0: boolean): number;
	getEyeLocation(): Location;
	getLineOfSight(arg0: any, arg1: number): any;
	getTargetBlock(arg0: any, arg1: number): Block;
	getLastTwoTargetBlocks(arg0: any, arg1: number): any;
	getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
	getTargetBlockExact(arg0: number): Block;
	rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
	rayTraceBlocks(arg0: number): RayTraceResult;
	getRemainingAir(): number;
	setRemainingAir(arg0: number): void;
	getMaximumAir(): number;
	setMaximumAir(arg0: number): void;
	getMaximumNoDamageTicks(): number;
	setMaximumNoDamageTicks(arg0: number): void;
	getLastDamage(): number;
	setLastDamage(arg0: number): void;
	getNoDamageTicks(): number;
	setNoDamageTicks(arg0: number): void;
	getKiller(): Player;
	addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPotionEffect(arg0: PotionEffect): boolean;
	addPotionEffects(arg0: any): boolean;
	hasPotionEffect(arg0: PotionEffectType): boolean;
	getPotionEffect(arg0: PotionEffectType): PotionEffect;
	removePotionEffect(arg0: PotionEffectType): void;
	getActivePotionEffects(): any;
	hasLineOfSight(arg0: Entity): boolean;
	getRemoveWhenFarAway(): boolean;
	setRemoveWhenFarAway(arg0: boolean): void;
	getEquipment(): EntityEquipment;
	setCanPickupItems(arg0: boolean): void;
	getCanPickupItems(): boolean;
	isLeashed(): boolean;
	getLeashHolder(): Entity;
	setLeashHolder(arg0: Entity): boolean;
	isGliding(): boolean;
	setGliding(arg0: boolean): void;
	isSwimming(): boolean;
	setSwimming(arg0: boolean): void;
	isRiptiding(): boolean;
	isSleeping(): boolean;
	setAI(arg0: boolean): void;
	hasAI(): boolean;
	setCollidable(arg0: boolean): void;
	isCollidable(): boolean;
	getMemory(arg0: MemoryKey): any;
	setMemory(arg0: MemoryKey, arg1: any): void;
	getAttribute(arg0: Attribute): AttributeInstance;
	damage(arg0: number): void;
	damage(arg0: number, arg1: Entity): void;
	getHealth(): number;
	setHealth(arg0: number): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(arg0: number): void;
	getMaxHealth(): number;
	setMaxHealth(arg0: number): void;
	resetMaxHealth(): void;
	isValid(): boolean;
	getServer(): Server;
	getWorld(): World;
	playEffect(arg0: EntityEffect): void;
	getUniqueId(): string;
	setVelocity(arg0: Vector): void;
	getVelocity(): Vector;
	getHeight(): number;
	getWidth(): number;
	getBoundingBox(): BoundingBox;
	isOnGround(): boolean;
	setRotation(arg0: number, arg1: number): void;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): any;
	getEntityId(): number;
	getFireTicks(): number;
	getMaxFireTicks(): number;
	setFireTicks(arg0: number): void;
	isDead(): boolean;
	isPersistent(): boolean;
	setPersistent(arg0: boolean): void;
	getPassenger(): Entity;
	setPassenger(arg0: Entity): boolean;
	getPassengers(): any;
	addPassenger(arg0: Entity): boolean;
	removePassenger(arg0: Entity): boolean;
	eject(): boolean;
	getFallDistance(): number;
	setFallDistance(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	getLastDamageCause(): EntityDamageEvent;
	getTicksLived(): number;
	setTicksLived(arg0: number): void;
	isInsideVehicle(): boolean;
	leaveVehicle(): boolean;
	getVehicle(): Entity;
	setCustomNameVisible(arg0: boolean): void;
	isCustomNameVisible(): boolean;
	setGlowing(arg0: boolean): void;
	isGlowing(): boolean;
	setInvulnerable(arg0: boolean): void;
	isInvulnerable(): boolean;
	isSilent(): boolean;
	setSilent(arg0: boolean): void;
	hasGravity(): boolean;
	setGravity(arg0: boolean): void;
	getPortalCooldown(): number;
	setPortalCooldown(arg0: number): void;
	getScoreboardTags(): any;
	addScoreboardTag(arg0: string): boolean;
	removeScoreboardTag(arg0: string): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	getFacing(): BlockFace;
	getPose(): Pose;
	remove(): void;
	isEmpty(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getType(): EntityType;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): any;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	sendMessage(arg0: string): void;
	sendMessage(arg0: Array<string>): void;
	getName(): string;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	recalculatePermissions(): void;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin): PermissionAttachment;
	removeAttachment(arg0: PermissionAttachment): void;
	getEffectivePermissions(): any;
	isOp(): boolean;
	setOp(arg0: boolean): void;
	setCustomName(arg0: string): void;
	getCustomName(): string;
	getPersistentDataContainer(): PersistentDataContainer;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
	getLootTable(): LootTable;
	getSeed(): number;
	setLootTable(arg0: LootTable): void;
	setSeed(arg0: number): void;
}

export class Mob {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Mob');
	}
}

