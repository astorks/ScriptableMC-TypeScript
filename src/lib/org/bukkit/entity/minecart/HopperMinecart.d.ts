import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../../org/bukkit/util/BoundingBox.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../../org/bukkit/EntityEffect.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../../org/bukkit/inventory/InventoryHolder.js';
import Location from '../../../../org/bukkit/Location.js';
import LootTable from '../../../../org/bukkit/loot/LootTable.js';
import Lootable from '../../../../org/bukkit/loot/Lootable.js';
import MaterialData from '../../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../../org/bukkit/metadata/MetadataValue.js';
import Minecart from '../../../../org/bukkit/entity/Minecart.js';
import Permission from '../../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../../org/bukkit/block/PistonMoveReaction.js';
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import Pose from '../../../../org/bukkit/entity/Pose.js';
import Server from '../../../../org/bukkit/Server.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
import World from '../../../../org/bukkit/World.js';
export default interface HopperMinecart extends Minecart, InventoryHolder, Lootable {
    setEnabled(arg0: boolean): void;
    isEnabled(): boolean;
    setDamage(arg0: number): void;
    getDamage(): number;
    getFlyingVelocityMod(): Vector;
    setDerailedVelocityMod(arg0: Vector): void;
    setFlyingVelocityMod(arg0: Vector): void;
    setDisplayBlockData(arg0: BlockData): void;
    setDisplayBlockOffset(arg0: number): void;
    getDerailedVelocityMod(): Vector;
    getDisplayBlockData(): BlockData;
    getDisplayBlockOffset(): number;
    setMaxSpeed(arg0: number): void;
    getMaxSpeed(): number;
    getDisplayBlock(): MaterialData;
    isSlowWhenEmpty(): boolean;
    setDisplayBlock(arg0: MaterialData): void;
    setSlowWhenEmpty(arg0: boolean): void;
    setVelocity(arg0: Vector): void;
    getVelocity(): Vector;
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
    getInventory(): Inventory;
    getSeed(): number;
    getLootTable(): LootTable;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export default class HopperMinecart {
    static get $javaClass(): any;
}
