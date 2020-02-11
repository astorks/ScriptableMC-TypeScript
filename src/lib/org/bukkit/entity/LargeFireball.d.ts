import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js';
import Entity from '../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js';
import EntityEffect from '../../../org/bukkit/EntityEffect.js';
import EntityType from '../../../org/bukkit/entity/EntityType.js';
import Fireball from '../../../org/bukkit/entity/Fireball.js';
import Location from '../../../org/bukkit/Location.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Permission from '../../../org/bukkit/permissions/Permission.js';
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js';
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Pose from '../../../org/bukkit/entity/Pose.js';
import ProjectileSource from '../../../org/bukkit/projectiles/ProjectileSource.js';
import Server from '../../../org/bukkit/Server.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface LargeFireball extends Fireball {
    getDirection(): Vector;
    setDirection(arg0: Vector): void;
    getShooter(): ProjectileSource;
    setShooter(arg0: ProjectileSource): void;
    setBounce(arg0: boolean): void;
    doesBounce(): boolean;
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
    setIsIncendiary(arg0: boolean): void;
    isIncendiary(): boolean;
    getYield(): number;
    setYield(arg0: number): void;
}
export default class LargeFireball {
    static get $javaClass(): any;
}
