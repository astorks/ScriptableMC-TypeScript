import Attributable from '../../../org/bukkit/attribute/Attributable.js';
import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js';
import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Damageable from '../../../org/bukkit/entity/Damageable.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js';
import EntityType from '../../../org/bukkit/entity/EntityType.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import Location from '../../../org/bukkit/Location.js';
import MemoryKey from '../../../org/bukkit/entity/memory/MemoryKey.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import Player from '../../../org/bukkit/entity/Player.js';
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Pose from '../../../org/bukkit/entity/Pose.js';
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js';
import Projectile from '../../../org/bukkit/entity/Projectile.js';
import ProjectileSource from '../../../org/bukkit/projectiles/ProjectileSource.js';
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Server from '../../../org/bukkit/Server.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface LivingEntity extends Attributable, Damageable, ProjectileSource {
    setMemory(arg0: MemoryKey, arg1: any): void;
    getLastTwoTargetBlocks(arg0: any, arg1: number): any;
    setMaximumNoDamageTicks(arg0: number): void;
    getActivePotionEffects(): any;
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
    getTargetBlockExact(arg0: number): Block;
    setRemoveWhenFarAway(arg0: boolean): void;
    getRemoveWhenFarAway(): boolean;
    getMaximumNoDamageTicks(): number;
    setLeashHolder(arg0: Entity): boolean;
    getMaximumAir(): number;
    setCanPickupItems(arg0: boolean): void;
    getTargetBlock(arg0: any, arg1: number): Block;
    getEquipment(): EntityEquipment;
    setCollidable(arg0: boolean): void;
    addPotionEffect(arg0: PotionEffect): boolean;
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
    hasAI(): boolean;
    isCollidable(): boolean;
    isSwimming(): boolean;
    getLeashHolder(): Entity;
    getLineOfSight(arg0: any, arg1: number): any;
    setRemainingAir(arg0: number): void;
    isGliding(): boolean;
    getCanPickupItems(): boolean;
    getPotionEffect(arg0: PotionEffectType): PotionEffect;
    isLeashed(): boolean;
    setMaximumAir(arg0: number): void;
    isSleeping(): boolean;
    removePotionEffect(arg0: PotionEffectType): void;
    getLastDamage(): number;
    hasLineOfSight(arg0: Entity): boolean;
    rayTraceBlocks(arg0: number): RayTraceResult;
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
    setLastDamage(arg0: number): void;
    hasPotionEffect(arg0: PotionEffectType): boolean;
    setAI(arg0: boolean): void;
    getEyeLocation(): Location;
    setNoDamageTicks(arg0: number): void;
    getKiller(): Player;
    addPotionEffects(arg0: any): boolean;
    getNoDamageTicks(): number;
    getEyeHeight(): number;
    getEyeHeight(arg0: boolean): number;
    setGliding(arg0: boolean): void;
    getRemainingAir(): number;
    setSwimming(arg0: boolean): void;
    isRiptiding(): boolean;
    getMemory(arg0: MemoryKey): any;
    getAttribute(arg0: Attribute): AttributeInstance;
    getAbsorptionAmount(): number;
    setAbsorptionAmount(arg0: number): void;
    damage(arg0: number): void;
    damage(arg0: number, arg1: Entity): void;
    resetMaxHealth(): void;
    setHealth(arg0: number): void;
    getHealth(): number;
    getMaxHealth(): number;
    setMaxHealth(arg0: number): void;
    remove(): void;
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): EntityType;
    getServer(): Server;
    getWorld(): World;
    playEffect(arg0: EntityEffect): void;
    isValid(): boolean;
    getWidth(): number;
    getBoundingBox(): BoundingBox;
    isOnGround(): boolean;
    teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Location): boolean;
    teleport(arg0: Entity): boolean;
    teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    setRotation(arg0: number, arg1: number): void;
    getNearbyEntities(arg0: number, arg1: number, arg2: number): any;
    getEntityId(): number;
    setVelocity(arg0: Vector): void;
    getVelocity(): Vector;
    getHeight(): number;
    getPassenger(): Entity;
    setLastDamageCause(arg0: EntityDamageEvent): void;
    leaveVehicle(): boolean;
    getMaxFireTicks(): number;
    addPassenger(arg0: Entity): boolean;
    getVehicle(): Entity;
    getTicksLived(): number;
    getFallDistance(): number;
    eject(): boolean;
    setGravity(arg0: boolean): void;
    isDead(): boolean;
    setPortalCooldown(arg0: number): void;
    getLastDamageCause(): EntityDamageEvent;
    isPersistent(): boolean;
    setInvulnerable(arg0: boolean): void;
    getUniqueId(): string;
    setFallDistance(arg0: number): void;
    setGlowing(arg0: boolean): void;
    setPersistent(arg0: boolean): void;
    getFacing(): BlockFace;
    getPose(): Pose;
    isSilent(): boolean;
    getFireTicks(): number;
    isInsideVehicle(): boolean;
    isGlowing(): boolean;
    hasGravity(): boolean;
    getPortalCooldown(): number;
    setFireTicks(arg0: number): void;
    getScoreboardTags(): any;
    getPassengers(): any;
    removePassenger(arg0: Entity): boolean;
    isInvulnerable(): boolean;
    setTicksLived(arg0: number): void;
    setPassenger(arg0: Entity): boolean;
    setSilent(arg0: boolean): void;
    addScoreboardTag(arg0: string): boolean;
    getPistonMoveReaction(): PistonMoveReaction;
    isCustomNameVisible(): boolean;
    setCustomNameVisible(arg0: boolean): void;
    removeScoreboardTag(arg0: string): boolean;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): any;
    getName(): string;
    sendMessage(arg0: Array<string>): void;
    sendMessage(arg0: string): void;
    hasPermission(arg0: string): boolean;
    hasPermission(arg0: Permission): boolean;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
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
export default class LivingEntity {
    static get $javaClass(): any;
}
