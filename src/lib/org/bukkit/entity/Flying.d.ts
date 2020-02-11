import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js';
import Block from '../../../org/bukkit/block/Block.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js';
import EntityType from '../../../org/bukkit/entity/EntityType.js';
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import LootTable from '../../../org/bukkit/loot/LootTable.js';
import MemoryKey from '../../../org/bukkit/entity/memory/MemoryKey.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Mob from '../../../org/bukkit/entity/Mob.js';
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
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js';
import Server from '../../../org/bukkit/Server.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface Flying extends Mob {
    getTarget(): LivingEntity;
    setTarget(arg0: LivingEntity): void;
    setMemory(arg0: MemoryKey, arg1: any): void;
    addPotionEffects(arg0: any): boolean;
    isCollidable(): boolean;
    getRemainingAir(): number;
    setNoDamageTicks(arg0: number): void;
    hasPotionEffect(arg0: PotionEffectType): boolean;
    setGliding(arg0: boolean): void;
    setLeashHolder(arg0: Entity): boolean;
    getEquipment(): EntityEquipment;
    rayTraceBlocks(arg0: number): RayTraceResult;
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult;
    addPotionEffect(arg0: PotionEffect): boolean;
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
    setSwimming(arg0: boolean): void;
    getMaximumAir(): number;
    isGliding(): boolean;
    getCanPickupItems(): boolean;
    setAI(arg0: boolean): void;
    getTargetBlock(arg0: any, arg1: number): Block;
    getLineOfSight(arg0: any, arg1: number): Array<Block>;
    setMaximumAir(arg0: number): void;
    setLastDamage(arg0: number): void;
    getNoDamageTicks(): number;
    hasLineOfSight(arg0: Entity): boolean;
    setCanPickupItems(arg0: boolean): void;
    getPotionEffect(arg0: PotionEffectType): PotionEffect;
    getEyeLocation(): Location;
    getLeashHolder(): Entity;
    isSleeping(): boolean;
    isLeashed(): boolean;
    setRemainingAir(arg0: number): void;
    isRiptiding(): boolean;
    setCollidable(arg0: boolean): void;
    getLastDamage(): number;
    hasAI(): boolean;
    getMemory(arg0: MemoryKey): any;
    getKiller(): Player;
    removePotionEffect(arg0: PotionEffectType): void;
    isSwimming(): boolean;
    getEyeHeight(arg0: boolean): number;
    getEyeHeight(): number;
    getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
    getMaximumNoDamageTicks(): number;
    setMaximumNoDamageTicks(arg0: number): void;
    getActivePotionEffects(): any;
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
    getTargetBlockExact(arg0: number): Block;
    getRemoveWhenFarAway(): boolean;
    setRemoveWhenFarAway(arg0: boolean): void;
    getAttribute(arg0: Attribute): AttributeInstance;
    damage(arg0: number): void;
    damage(arg0: number, arg1: Entity): void;
    getHealth(): number;
    setHealth(arg0: number): void;
    setMaxHealth(arg0: number): void;
    getMaxHealth(): number;
    resetMaxHealth(): void;
    setAbsorptionAmount(arg0: number): void;
    getAbsorptionAmount(): number;
    remove(): void;
    isEmpty(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): EntityType;
    getServer(): Server;
    isValid(): boolean;
    playEffect(arg0: EntityEffect): void;
    getVelocity(): Vector;
    teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Entity): boolean;
    teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
    teleport(arg0: Location): boolean;
    getPassengers(): Array<Entity>;
    leaveVehicle(): boolean;
    getVehicle(): Entity;
    getEntityId(): number;
    isGlowing(): boolean;
    hasGravity(): boolean;
    setGravity(arg0: boolean): void;
    isDead(): boolean;
    removePassenger(arg0: Entity): boolean;
    getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
    setFireTicks(arg0: number): void;
    getTicksLived(): number;
    isInsideVehicle(): boolean;
    setGlowing(arg0: boolean): void;
    isInvulnerable(): boolean;
    setPortalCooldown(arg0: number): void;
    setVelocity(arg0: Vector): void;
    addScoreboardTag(arg0: string): boolean;
    setLastDamageCause(arg0: EntityDamageEvent): void;
    getPortalCooldown(): number;
    getFacing(): BlockFace;
    setFallDistance(arg0: number): void;
    getPose(): Pose;
    setRotation(arg0: number, arg1: number): void;
    getHeight(): number;
    getMaxFireTicks(): number;
    setSilent(arg0: boolean): void;
    setPersistent(arg0: boolean): void;
    setInvulnerable(arg0: boolean): void;
    getScoreboardTags(): any;
    getBoundingBox(): BoundingBox;
    isSilent(): boolean;
    getFireTicks(): number;
    isPersistent(): boolean;
    getPassenger(): Entity;
    getFallDistance(): number;
    isOnGround(): boolean;
    setPassenger(arg0: Entity): boolean;
    addPassenger(arg0: Entity): boolean;
    getLastDamageCause(): EntityDamageEvent;
    eject(): boolean;
    getUniqueId(): string;
    getWorld(): World;
    setTicksLived(arg0: number): void;
    getWidth(): number;
    setCustomNameVisible(arg0: boolean): void;
    getPistonMoveReaction(): PistonMoveReaction;
    isCustomNameVisible(): boolean;
    removeScoreboardTag(arg0: string): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
    getName(): string;
    sendMessage(arg0: Array<string>): void;
    sendMessage(arg0: string): void;
    getEffectivePermissions(): any;
    recalculatePermissions(): void;
    hasPermission(arg0: Permission): boolean;
    hasPermission(arg0: string): boolean;
    removeAttachment(arg0: PermissionAttachment): void;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
    addAttachment(arg0: Plugin): PermissionAttachment;
    addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
    isPermissionSet(arg0: string): boolean;
    isPermissionSet(arg0: Permission): boolean;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    setCustomName(arg0: string): void;
    getCustomName(): string;
    getPersistentDataContainer(): PersistentDataContainer;
    launchProjectile(arg0: any): Projectile;
    launchProjectile(arg0: any, arg1: Vector): Projectile;
    setSeed(arg0: number): void;
    getLootTable(): LootTable;
    getSeed(): number;
    setLootTable(arg0: LootTable): void;
}
export default class Flying {
    static get $javaClass(): any;
}
