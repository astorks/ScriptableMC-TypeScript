declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../../org/bukkit/util/BoundingBox.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../../org/bukkit/EntityEffect.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import Location from '../../../../org/bukkit/Location.js'
import MaterialData from '../../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../../org/bukkit/metadata/MetadataValue.js'
import Minecart from '../../../../org/bukkit/entity/Minecart.js'
import Permission from '../../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../../org/bukkit/block/PistonMoveReaction.js'
import PlayerTeleportEvent$TeleportCause from '../../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../../org/bukkit/plugin/Plugin.js'
import Pose from '../../../../org/bukkit/entity/Pose.js'
import Server from '../../../../org/bukkit/Server.js'
import Vector from '../../../../org/bukkit/util/Vector.js'
import World from '../../../../org/bukkit/World.js'

export default interface ExplosiveMinecart extends Minecart {
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addPassenger(arg0: Entity): boolean;
	addScoreboardTag(arg0: string): boolean;
	eject(): boolean;
	getBoundingBox(): BoundingBox;
	getCustomName(): string;
	getDamage(): number;
	getDerailedVelocityMod(): Vector;
	getDisplayBlock(): MaterialData;
	getDisplayBlockData(): BlockData;
	getDisplayBlockOffset(): number;
	getEffectivePermissions(): any;
	getEntityId(): number;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getFlyingVelocityMod(): Vector;
	getHeight(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMaxFireTicks(): number;
	getMaxSpeed(): number;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getScoreboardTags(): any;
	getServer(): Server;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWidth(): number;
	getWorld(): World;
	hasGravity(): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isGlowing(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPersistent(): boolean;
	isSilent(): boolean;
	isSlowWhenEmpty(): boolean;
	isValid(): boolean;
	leaveVehicle(): boolean;
	playEffect(arg0: EntityEffect): void;
	recalculatePermissions(): void;
	remove(): void;
	removeAttachment(arg0: PermissionAttachment): void;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePassenger(arg0: Entity): boolean;
	removeScoreboardTag(arg0: string): boolean;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setDamage(arg0: number): void;
	setDerailedVelocityMod(arg0: Vector): void;
	setDisplayBlock(arg0: MaterialData): void;
	setDisplayBlockData(arg0: BlockData): void;
	setDisplayBlockOffset(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setFlyingVelocityMod(arg0: Vector): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setMaxSpeed(arg0: number): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setOp(arg0: boolean): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPortalCooldown(arg0: number): void;
	setRotation(arg0: number, arg1: number): void;
	setSilent(arg0: boolean): void;
	setSlowWhenEmpty(arg0: boolean): void;
	setTicksLived(arg0: number): void;
	setVelocity(arg0: Vector): void;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
}

export default class ExplosiveMinecart {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.minecart.ExplosiveMinecart');
	}

}

