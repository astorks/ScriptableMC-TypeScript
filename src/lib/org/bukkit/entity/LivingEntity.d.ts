import { MemoryKey } from '../../../org/bukkit/entity/memory/MemoryKey.js';
import { Location } from '../../../org/bukkit/Location.js';
import { Block } from '../../../org/bukkit/block/Block.js';
import { RayTraceResult } from '../../../org/bukkit/util/RayTraceResult.js';
import { FluidCollisionMode } from '../../../org/bukkit/FluidCollisionMode.js';
import { EntityEquipment } from '../../../org/bukkit/inventory/EntityEquipment.js';
import { PotionEffectType } from '../../../org/bukkit/potion/PotionEffectType.js';
import { PotionEffect } from '../../../org/bukkit/potion/PotionEffect.js';
import { Entity } from '../../../org/bukkit/entity/Entity.js';
import { Player } from '../../../org/bukkit/entity/Player.js';
import { AttributeInstance } from '../../../org/bukkit/attribute/AttributeInstance.js';
import { Attribute } from '../../../org/bukkit/attribute/Attribute.js';
import { EntityType } from '../../../org/bukkit/entity/EntityType.js';
import { Server } from '../../../org/bukkit/Server.js';
import { BlockFace } from '../../../org/bukkit/block/BlockFace.js';
import { Pose } from '../../../org/bukkit/entity/Pose.js';
import { EntityDamageEvent } from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import { World } from '../../../org/bukkit/World.js';
import { EntityEffect } from '../../../org/bukkit/EntityEffect.js';
import { Vector } from '../../../org/bukkit/util/Vector.js';
import { BoundingBox } from '../../../org/bukkit/util/BoundingBox.js';
import { PlayerTeleportEvent$TeleportCause } from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import { PistonMoveReaction } from '../../../org/bukkit/block/PistonMoveReaction.js';
import { MetadataValue } from '../../../org/bukkit/metadata/MetadataValue.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { Permission } from '../../../org/bukkit/permissions/Permission.js';
import { PermissionAttachment } from '../../../org/bukkit/permissions/PermissionAttachment.js';
import { PersistentDataContainer } from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import { Projectile } from '../../../org/bukkit/entity/Projectile.js';
import { Attributable } from '../../../org/bukkit/attribute/Attributable.js';
import { Damageable } from '../../../org/bukkit/entity/Damageable.js';
import { ProjectileSource } from '../../../org/bukkit/projectiles/ProjectileSource.js';
export interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    setMemory(arg0: MemoryKey, arg1: any): void;
    getEyeHeight(): number;
    getEyeHeight(arg0: boolean): number;
    getEyeLocation(): Location;
    getTargetBlock(arg0: any, arg1: number): Block;
    getLineOfSight(arg0: any, arg1: number): any;
    setLastDamage(arg0: number): void;
    getLastDamage(): number;
    setAI(arg0: boolean): void;
    setRemainingAir(arg0: number): void;
    getNoDamageTicks(): number;
    isCollidable(): boolean;
    rayTraceBlocks(arg0: number): RayTraceResult;
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
    setGliding(arg0: boolean): void;
    isRiptiding(): boolean;
    getEquipment(): EntityEquipment;
    isSwimming(): boolean;
    addPotionEffects(arg0: any): boolean;
    setSwimming(arg0: boolean): void;
    setCollidable(arg0: boolean): void;
    setNoDamageTicks(arg0: number): void;
    getCanPickupItems(): boolean;
    hasAI(): boolean;
    getMemory(arg0: MemoryKey): any;
    getMaximumAir(): number;
    hasPotionEffect(arg0: PotionEffectType): boolean;
    addPotionEffect(arg0: PotionEffect): boolean;
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
    removePotionEffect(arg0: PotionEffectType): void;
    getRemainingAir(): number;
    getPotionEffect(arg0: PotionEffectType): PotionEffect;
    setCanPickupItems(arg0: boolean): void;
    isLeashed(): boolean;
    setMaximumAir(arg0: number): void;
    getLeashHolder(): Entity;
    isGliding(): boolean;
    setLeashHolder(arg0: Entity): boolean;
    isSleeping(): boolean;
    getKiller(): Player;
    hasLineOfSight(arg0: Entity): boolean;
    getRemoveWhenFarAway(): boolean;
    getMaximumNoDamageTicks(): number;
    setRemoveWhenFarAway(arg0: boolean): void;
    getLastTwoTargetBlocks(arg0: any, arg1: number): any;
    setMaximumNoDamageTicks(arg0: number): void;
    getTargetBlockExact(arg0: number): Block;
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
    getActivePotionEffects(): any;
    getAttribute(arg0: Attribute): AttributeInstance;
    setMaxHealth(arg0: number): void;
    setHealth(arg0: number): void;
    damage(arg0: number): void;
    damage(arg0: number, arg1: Entity): void;
    getHealth(): number;
    getMaxHealth(): number;
    resetMaxHealth(): void;
    getAbsorptionAmount(): number;
    setAbsorptionAmount(arg0: number): void;
    remove(): void;
    isEmpty(): boolean;
    getLocation(arg0: Location): Location;
    getLocation(): Location;
    getType(): EntityType;
    getServer(): Server;
    getUniqueId(): string;
    isInsideVehicle(): boolean;
    getPassengers(): any;
    setFallDistance(arg0: number): void;
    getFacing(): BlockFace;
    setPassenger(arg0: Entity): boolean;
    setFireTicks(arg0: number): void;
    leaveVehicle(): boolean;
    hasGravity(): boolean;
    eject(): boolean;
    getPose(): Pose;
    setPersistent(arg0: boolean): void;
    getLastDamageCause(): EntityDamageEvent;
    isInvulnerable(): boolean;
    getFireTicks(): number;
    setPortalCooldown(arg0: number): void;
    getVehicle(): Entity;
    isGlowing(): boolean;
    getMaxFireTicks(): number;
    getPassenger(): Entity;
    setInvulnerable(arg0: boolean): void;
    isPersistent(): boolean;
    removePassenger(arg0: Entity): boolean;
    setTicksLived(arg0: number): void;
    isSilent(): boolean;
    getScoreboardTags(): any;
    addScoreboardTag(arg0: string): boolean;
    setSilent(arg0: boolean): void;
    setGravity(arg0: boolean): void;
    getTicksLived(): number;
    isDead(): boolean;
    getFallDistance(): number;
    setGlowing(arg0: boolean): void;
    getPortalCooldown(): number;
    addPassenger(arg0: Entity): boolean;
    setLastDamageCause(arg0: EntityDamageEvent): void;
    isValid(): boolean;
    getWorld(): World;
    playEffect(arg0: EntityEffect): void;
    setVelocity(arg0: Vector): void;
    getHeight(): number;
    getWidth(): number;
    getBoundingBox(): BoundingBox;
    setRotation(arg0: number, arg1: number): void;
    getVelocity(): Vector;
    isOnGround(): boolean;
    teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Location): boolean;
    teleport(arg0: Entity): boolean;
    teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    getNearbyEntities(arg0: number, arg1: number, arg2: number): any;
    getEntityId(): number;
    setCustomNameVisible(arg0: boolean): void;
    getPistonMoveReaction(): PistonMoveReaction;
    isCustomNameVisible(): boolean;
    removeScoreboardTag(arg0: string): boolean;
    hasMetadata(arg0: string): boolean;
    getMetadata(arg0: string): any;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    getName(): string;
    sendMessage(arg0: string): void;
    sendMessage(arg0: Array<string>): void;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    hasPermission(arg0: string): boolean;
    hasPermission(arg0: Permission): boolean;
    recalculatePermissions(): void;
    getEffectivePermissions(): any;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    getCustomName(): string;
    setCustomName(arg0: string): void;
    getPersistentDataContainer(): PersistentDataContainer;
    launchProjectile(arg0: any): Projectile;
    launchProjectile(arg0: any, arg1: Vector): Projectile;
}
export declare class LivingEntity {
    static get $javaClass(): any;
}
