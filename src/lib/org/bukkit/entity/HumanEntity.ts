declare var Java: any;
import AnimalTamer from './AnimalTamer.js'
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js'
import Block from '../../../org/bukkit/block/Block.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import CommandSender$Spigot from '../../../org/bukkit/command/CommandSender$Spigot.js'
import Entity from './Entity.js'
import Entity$Spigot from './Entity$Spigot.js'
import EntityCategory from './EntityCategory.js'
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../org/bukkit/EntityEffect.js'
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js'
import EntityType from './EntityType.js'
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js'
import GameMode from '../../../org/bukkit/GameMode.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js'
import InventoryView from '../../../org/bukkit/inventory/InventoryView.js'
import InventoryView$Property from '../../../org/bukkit/inventory/InventoryView$Property.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from './LivingEntity.js'
import Location from '../../../org/bukkit/Location.js'
import MainHand from '../../../org/bukkit/inventory/MainHand.js'
import Material from '../../../org/bukkit/Material.js'
import MemoryKey from './memory/MemoryKey.js'
import Merchant from '../../../org/bukkit/inventory/Merchant.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import Player from './Player.js'
import PlayerInventory from '../../../org/bukkit/inventory/PlayerInventory.js'
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import Pose from './Pose.js'
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'
import Projectile from './Projectile.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Server from '../../../org/bukkit/Server.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import Villager from './Villager.js'
import World from '../../../org/bukkit/World.js'

export default interface HumanEntity extends LivingEntity, AnimalTamer, InventoryHolder {
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
	closeInventory(): void;
	damage(arg0: number): void;
	damage(arg0: number, arg1: Entity): void;
	discoverRecipe(arg0: NamespacedKey): boolean;
	discoverRecipes(arg0: Array<any>): number;
	dropItem(arg0: boolean): boolean;
	eject(): boolean;
	getAbsorptionAmount(): number;
	getActivePotionEffects(): Array<PotionEffect>;
	getArrowCooldown(): number;
	getArrowsInBody(): number;
	getAttackCooldown(): number;
	getAttribute(arg0: Attribute): AttributeInstance;
	getBedLocation(): Location;
	getBoundingBox(): BoundingBox;
	getCanPickupItems(): boolean;
	getCategory(): EntityCategory;
	getCollidableExemptions(): any;
	getCooldown(arg0: Material): number;
	getCustomName(): string;
	getDiscoveredRecipes(): any;
	getEffectivePermissions(): any;
	getEnderChest(): Inventory;
	getEntityId(): number;
	getEquipment(): EntityEquipment;
	getExhaustion(): number;
	getExpToLevel(): number;
	getEyeHeight(): number;
	getEyeHeight(arg0: boolean): number;
	getEyeLocation(): Location;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getFoodLevel(): number;
	getFreezeTicks(): number;
	getGameMode(): GameMode;
	getHealth(): number;
	getHeight(): number;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	getItemInHand(): ItemStack;
	getItemOnCursor(): ItemStack;
	getKiller(): Player;
	getLastDamage(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
	getLeashHolder(): Entity;
	getLineOfSight(arg0: any, arg1: number): Array<Block>;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMainHand(): MainHand;
	getMaxFireTicks(): number;
	getMaxFreezeTicks(): number;
	getMaxHealth(): number;
	getMaximumAir(): number;
	getMaximumNoDamageTicks(): number;
	getMemory(arg0: MemoryKey): any;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getNoDamageTicks(): number;
	getOpenInventory(): InventoryView;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPortalCooldown(): number;
	getPose(): Pose;
	getPotionEffect(arg0: PotionEffectType): PotionEffect;
	getRemainingAir(): number;
	getRemoveWhenFarAway(): boolean;
	getSaturatedRegenRate(): number;
	getSaturation(): number;
	getScoreboardTags(): any;
	getServer(): Server;
	getShoulderEntityLeft(): Entity;
	getShoulderEntityRight(): Entity;
	getSleepTicks(): number;
	getStarvationRate(): number;
	getTargetBlock(arg0: any, arg1: number): Block;
	getTargetBlockExact(arg0: number): Block;
	getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
	getTicksLived(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getUniqueId(): string;
	getUnsaturatedRegenRate(): number;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWidth(): number;
	getWorld(): World;
	hasAI(): boolean;
	hasCooldown(arg0: Material): boolean;
	hasDiscoveredRecipe(arg0: NamespacedKey): boolean;
	hasGravity(): boolean;
	hasLineOfSight(arg0: Entity): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	hasPermission(arg0: string): boolean;
	hasPotionEffect(arg0: PotionEffectType): boolean;
	isBlocking(): boolean;
	isCollidable(): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isFrozen(): boolean;
	isGliding(): boolean;
	isGlowing(): boolean;
	isHandRaised(): boolean;
	isInWater(): boolean;
	isInsideVehicle(): boolean;
	isInvisible(): boolean;
	isInvulnerable(): boolean;
	isLeashed(): boolean;
	isOnGround(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPermissionSet(arg0: string): boolean;
	isPersistent(): boolean;
	isRiptiding(): boolean;
	isSilent(): boolean;
	isSleeping(): boolean;
	isSwimming(): boolean;
	isValid(): boolean;
	isVisualFire(): boolean;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
	leaveVehicle(): boolean;
	openEnchanting(arg0: Location, arg1: boolean): InventoryView;
	openInventory(arg0: Inventory): InventoryView;
	openInventory(arg0: InventoryView): void;
	openMerchant(arg0: Merchant, arg1: boolean): InventoryView;
	openMerchant(arg0: Villager, arg1: boolean): InventoryView;
	openWorkbench(arg0: Location, arg1: boolean): InventoryView;
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
	sendMessage(arg0: string): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string, arg1: Array<string>): void;
	sendMessage(arg0: string, arg1: string): void;
	setAI(arg0: boolean): void;
	setAbsorptionAmount(arg0: number): void;
	setArrowCooldown(arg0: number): void;
	setArrowsInBody(arg0: number): void;
	setCanPickupItems(arg0: boolean): void;
	setCollidable(arg0: boolean): void;
	setCooldown(arg0: Material, arg1: number): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setExhaustion(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setFoodLevel(arg0: number): void;
	setFreezeTicks(arg0: number): void;
	setGameMode(arg0: GameMode): void;
	setGliding(arg0: boolean): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setHealth(arg0: number): void;
	setInvisible(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setItemInHand(arg0: ItemStack): void;
	setItemOnCursor(arg0: ItemStack): void;
	setLastDamage(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setLeashHolder(arg0: Entity): boolean;
	setMaxHealth(arg0: number): void;
	setMaximumAir(arg0: number): void;
	setMaximumNoDamageTicks(arg0: number): void;
	setMemory(arg0: MemoryKey, arg1: any): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setNoDamageTicks(arg0: number): void;
	setOp(arg0: boolean): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPortalCooldown(arg0: number): void;
	setRemainingAir(arg0: number): void;
	setRemoveWhenFarAway(arg0: boolean): void;
	setRotation(arg0: number, arg1: number): void;
	setSaturatedRegenRate(arg0: number): void;
	setSaturation(arg0: number): void;
	setShoulderEntityLeft(arg0: Entity): void;
	setShoulderEntityRight(arg0: Entity): void;
	setSilent(arg0: boolean): void;
	setStarvationRate(arg0: number): void;
	setSwimming(arg0: boolean): void;
	setTicksLived(arg0: number): void;
	setUnsaturatedRegenRate(arg0: number): void;
	setVelocity(arg0: Vector): void;
	setVisualFire(arg0: boolean): void;
	setWindowProperty(arg0: InventoryView$Property, arg1: number): boolean;
	sleep(arg0: Location, arg1: boolean): boolean;
	spigot(): CommandSender$Spigot;
	spigot(): Entity$Spigot;
	swingMainHand(): void;
	swingOffHand(): void;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	undiscoverRecipe(arg0: NamespacedKey): boolean;
	undiscoverRecipes(arg0: Array<any>): number;
	wakeup(arg0: boolean): void;
}

export default class HumanEntity {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.HumanEntity');
	}

}

