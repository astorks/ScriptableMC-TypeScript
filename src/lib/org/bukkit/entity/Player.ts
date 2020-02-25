declare var Java: any;
import Advancement from '../../../org/bukkit/advancement/Advancement.js'
import AdvancementProgress from '../../../org/bukkit/advancement/AdvancementProgress.js'
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js'
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import BoundingBox from '../../../org/bukkit/util/BoundingBox.js'
import Conversable from '../../../org/bukkit/conversations/Conversable.js'
import Conversation from '../../../org/bukkit/conversations/Conversation.js'
import ConversationAbandonedEvent from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import DyeColor from '../../../org/bukkit/DyeColor.js'
import Effect from '../../../org/bukkit/Effect.js'
import Entity from '../../../org/bukkit/entity/Entity.js'
import EntityDamageEvent from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import EntityEffect from '../../../org/bukkit/EntityEffect.js'
import EntityEquipment from '../../../org/bukkit/inventory/EntityEquipment.js'
import EntityType from '../../../org/bukkit/entity/EntityType.js'
import FluidCollisionMode from '../../../org/bukkit/FluidCollisionMode.js'
import GameMode from '../../../org/bukkit/GameMode.js'
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js'
import Instrument from '../../../org/bukkit/Instrument.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import InventoryView from '../../../org/bukkit/inventory/InventoryView.js'
import InventoryView$Property from '../../../org/bukkit/inventory/InventoryView$Property.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import MainHand from '../../../org/bukkit/inventory/MainHand.js'
import MapView from '../../../org/bukkit/map/MapView.js'
import Material from '../../../org/bukkit/Material.js'
import MemoryKey from '../../../org/bukkit/entity/memory/MemoryKey.js'
import Merchant from '../../../org/bukkit/inventory/Merchant.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Note from '../../../org/bukkit/Note.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import Particle from '../../../org/bukkit/Particle.js'
import Permission from '../../../org/bukkit/permissions/Permission.js'
import PermissionAttachment from '../../../org/bukkit/permissions/PermissionAttachment.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PistonMoveReaction from '../../../org/bukkit/block/PistonMoveReaction.js'
import PlayerInventory from '../../../org/bukkit/inventory/PlayerInventory.js'
import PlayerTeleportEvent$TeleportCause from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import PluginMessageRecipient from '../../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import Pose from '../../../org/bukkit/entity/Pose.js'
import PotionEffect from '../../../org/bukkit/potion/PotionEffect.js'
import PotionEffectType from '../../../org/bukkit/potion/PotionEffectType.js'
import Projectile from '../../../org/bukkit/entity/Projectile.js'
import RayTraceResult from '../../../org/bukkit/util/RayTraceResult.js'
import Scoreboard from '../../../org/bukkit/scoreboard/Scoreboard.js'
import Server from '../../../org/bukkit/Server.js'
import Sound from '../../../org/bukkit/Sound.js'
import SoundCategory from '../../../org/bukkit/SoundCategory.js'
import Statistic from '../../../org/bukkit/Statistic.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import Villager from '../../../org/bukkit/entity/Villager.js'
import WeatherType from '../../../org/bukkit/WeatherType.js'
import World from '../../../org/bukkit/World.js'

export default interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
	abandonConversation(arg0: Conversation): void;
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	acceptConversationInput(arg0: string): void;
	addAttachment(arg0: Plugin): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: number): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean): PermissionAttachment;
	addAttachment(arg0: Plugin, arg1: string, arg2: boolean, arg3: number): PermissionAttachment;
	addPassenger(arg0: Entity): boolean;
	addPotionEffect(arg0: PotionEffect): boolean;
	addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean;
	addPotionEffects(arg0: any): boolean;
	addScoreboardTag(arg0: string): boolean;
	attack(arg0: Entity): void;
	beginConversation(arg0: Conversation): boolean;
	canSee(arg0: Player): boolean;
	chat(arg0: string): void;
	closeInventory(): void;
	damage(arg0: number): void;
	damage(arg0: number, arg1: Entity): void;
	decrementStatistic(arg0: Statistic): void;
	decrementStatistic(arg0: Statistic, arg1: number): void;
	decrementStatistic(arg0: Statistic, arg1: Material): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType): void;
	decrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	discoverRecipe(arg0: NamespacedKey): boolean;
	discoverRecipes(arg0: any): number;
	eject(): boolean;
	getAbsorptionAmount(): number;
	getActivePotionEffects(): any;
	getAddress(): any;
	getAdvancementProgress(arg0: Advancement): AdvancementProgress;
	getAllowFlight(): boolean;
	getAttribute(arg0: Attribute): AttributeInstance;
	getBedLocation(): Location;
	getBedSpawnLocation(): Location;
	getBedSpawnLocation(): Location;
	getBoundingBox(): BoundingBox;
	getCanPickupItems(): boolean;
	getClientViewDistance(): number;
	getCompassTarget(): Location;
	getCooldown(arg0: Material): number;
	getCustomName(): string;
	getDisplayName(): string;
	getEffectivePermissions(): any;
	getEnderChest(): Inventory;
	getEntityId(): number;
	getEquipment(): EntityEquipment;
	getExhaustion(): number;
	getExp(): number;
	getExpToLevel(): number;
	getEyeHeight(): number;
	getEyeHeight(arg0: boolean): number;
	getEyeLocation(): Location;
	getFacing(): BlockFace;
	getFallDistance(): number;
	getFireTicks(): number;
	getFirstPlayed(): number;
	getFlySpeed(): number;
	getFoodLevel(): number;
	getGameMode(): GameMode;
	getHealth(): number;
	getHealthScale(): number;
	getHeight(): number;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	getItemInHand(): ItemStack;
	getItemOnCursor(): ItemStack;
	getKiller(): Player;
	getLastDamage(): number;
	getLastDamageCause(): EntityDamageEvent;
	getLastPlayed(): number;
	getLastTwoTargetBlocks(arg0: any, arg1: number): Array<Block>;
	getLeashHolder(): Entity;
	getLevel(): number;
	getLineOfSight(arg0: any, arg1: number): Array<Block>;
	getListeningPluginChannels(): any;
	getLocale(): string;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMainHand(): MainHand;
	getMaxFireTicks(): number;
	getMaxHealth(): number;
	getMaximumAir(): number;
	getMaximumNoDamageTicks(): number;
	getMemory(arg0: MemoryKey): any;
	getMetadata(arg0: string): Array<MetadataValue>;
	getName(): string;
	getName(): string;
	getNearbyEntities(arg0: number, arg1: number, arg2: number): Array<Entity>;
	getNoDamageTicks(): number;
	getOpenInventory(): InventoryView;
	getPassenger(): Entity;
	getPassengers(): Array<Entity>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPistonMoveReaction(): PistonMoveReaction;
	getPlayer(): Player;
	getPlayerListFooter(): string;
	getPlayerListHeader(): string;
	getPlayerListName(): string;
	getPlayerTime(): number;
	getPlayerTimeOffset(): number;
	getPlayerWeather(): WeatherType;
	getPortalCooldown(): number;
	getPose(): Pose;
	getPotionEffect(arg0: PotionEffectType): PotionEffect;
	getRemainingAir(): number;
	getRemoveWhenFarAway(): boolean;
	getSaturation(): number;
	getScoreboard(): Scoreboard;
	getScoreboardTags(): any;
	getServer(): Server;
	getShoulderEntityLeft(): Entity;
	getShoulderEntityRight(): Entity;
	getSleepTicks(): number;
	getSpectatorTarget(): Entity;
	getStatistic(arg0: Statistic): number;
	getStatistic(arg0: Statistic, arg1: Material): number;
	getStatistic(arg0: Statistic, arg1: EntityType): number;
	getTargetBlock(arg0: any, arg1: number): Block;
	getTargetBlockExact(arg0: number): Block;
	getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block;
	getTicksLived(): number;
	getTotalExperience(): number;
	getType(): EntityType;
	getUniqueId(): string;
	getUniqueId(): string;
	getVehicle(): Entity;
	getVelocity(): Vector;
	getWalkSpeed(): number;
	getWidth(): number;
	getWorld(): World;
	giveExp(arg0: number): void;
	giveExpLevels(arg0: number): void;
	hasAI(): boolean;
	hasCooldown(arg0: Material): boolean;
	hasGravity(): boolean;
	hasLineOfSight(arg0: Entity): boolean;
	hasMetadata(arg0: string): boolean;
	hasPermission(arg0: string): boolean;
	hasPermission(arg0: Permission): boolean;
	hasPlayedBefore(): boolean;
	hasPotionEffect(arg0: PotionEffectType): boolean;
	hidePlayer(arg0: Player): void;
	hidePlayer(arg0: Plugin, arg1: Player): void;
	incrementStatistic(arg0: Statistic): void;
	incrementStatistic(arg0: Statistic, arg1: number): void;
	incrementStatistic(arg0: Statistic, arg1: Material): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType): void;
	incrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	isBanned(): boolean;
	isBlocking(): boolean;
	isCollidable(): boolean;
	isConversing(): boolean;
	isCustomNameVisible(): boolean;
	isDead(): boolean;
	isEmpty(): boolean;
	isFlying(): boolean;
	isGliding(): boolean;
	isGlowing(): boolean;
	isHandRaised(): boolean;
	isHealthScaled(): boolean;
	isInsideVehicle(): boolean;
	isInvulnerable(): boolean;
	isLeashed(): boolean;
	isOnGround(): boolean;
	isOnline(): boolean;
	isOp(): boolean;
	isPermissionSet(arg0: string): boolean;
	isPermissionSet(arg0: Permission): boolean;
	isPersistent(): boolean;
	isPlayerTimeRelative(): boolean;
	isRiptiding(): boolean;
	isSilent(): boolean;
	isSleeping(): boolean;
	isSleepingIgnored(): boolean;
	isSneaking(): boolean;
	isSprinting(): boolean;
	isSwimming(): boolean;
	isValid(): boolean;
	isWhitelisted(): boolean;
	kickPlayer(arg0: string): void;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
	leaveVehicle(): boolean;
	loadData(): void;
	openBook(arg0: ItemStack): void;
	openEnchanting(arg0: Location, arg1: boolean): InventoryView;
	openInventory(arg0: Inventory): InventoryView;
	openInventory(arg0: InventoryView): void;
	openMerchant(arg0: Merchant, arg1: boolean): InventoryView;
	openMerchant(arg0: Villager, arg1: boolean): InventoryView;
	openWorkbench(arg0: Location, arg1: boolean): InventoryView;
	performCommand(arg0: string): boolean;
	playEffect(arg0: EntityEffect): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any): void;
	playNote(arg0: Location, arg1: Instrument, arg2: Note): void;
	playNote(arg0: Location, arg1: number, arg2: number): void;
	playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
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
	resetPlayerTime(): void;
	resetPlayerWeather(): void;
	resetTitle(): void;
	saveData(): void;
	sendBlockChange(arg0: Location, arg1: BlockData): void;
	sendBlockChange(arg0: Location, arg1: Material, arg2: number): void;
	sendChunkChange(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: Array<number>): boolean;
	sendExperienceChange(arg0: number): void;
	sendExperienceChange(arg0: number, arg1: number): void;
	sendMap(arg0: MapView): void;
	sendMessage(arg0: Array<string>): void;
	sendMessage(arg0: string): void;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	sendRawMessage(arg0: string): void;
	sendSignChange(arg0: Location, arg1: Array<string>): void;
	sendSignChange(arg0: Location, arg1: Array<string>, arg2: DyeColor): void;
	sendTitle(arg0: string, arg1: string): void;
	sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
	serialize(): any;
	setAI(arg0: boolean): void;
	setAbsorptionAmount(arg0: number): void;
	setAllowFlight(arg0: boolean): void;
	setBedSpawnLocation(arg0: Location): void;
	setBedSpawnLocation(arg0: Location, arg1: boolean): void;
	setCanPickupItems(arg0: boolean): void;
	setCollidable(arg0: boolean): void;
	setCompassTarget(arg0: Location): void;
	setCooldown(arg0: Material, arg1: number): void;
	setCustomName(arg0: string): void;
	setCustomNameVisible(arg0: boolean): void;
	setDisplayName(arg0: string): void;
	setExhaustion(arg0: number): void;
	setExp(arg0: number): void;
	setFallDistance(arg0: number): void;
	setFireTicks(arg0: number): void;
	setFlySpeed(arg0: number): void;
	setFlying(arg0: boolean): void;
	setFoodLevel(arg0: number): void;
	setGameMode(arg0: GameMode): void;
	setGliding(arg0: boolean): void;
	setGlowing(arg0: boolean): void;
	setGravity(arg0: boolean): void;
	setHealth(arg0: number): void;
	setHealthScale(arg0: number): void;
	setHealthScaled(arg0: boolean): void;
	setInvulnerable(arg0: boolean): void;
	setItemInHand(arg0: ItemStack): void;
	setItemOnCursor(arg0: ItemStack): void;
	setLastDamage(arg0: number): void;
	setLastDamageCause(arg0: EntityDamageEvent): void;
	setLeashHolder(arg0: Entity): boolean;
	setLevel(arg0: number): void;
	setMaxHealth(arg0: number): void;
	setMaximumAir(arg0: number): void;
	setMaximumNoDamageTicks(arg0: number): void;
	setMemory(arg0: MemoryKey, arg1: any): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setNoDamageTicks(arg0: number): void;
	setOp(arg0: boolean): void;
	setPassenger(arg0: Entity): boolean;
	setPersistent(arg0: boolean): void;
	setPlayerListFooter(arg0: string): void;
	setPlayerListHeader(arg0: string): void;
	setPlayerListHeaderFooter(arg0: string, arg1: string): void;
	setPlayerListName(arg0: string): void;
	setPlayerTime(arg0: number, arg1: boolean): void;
	setPlayerWeather(arg0: WeatherType): void;
	setPortalCooldown(arg0: number): void;
	setRemainingAir(arg0: number): void;
	setRemoveWhenFarAway(arg0: boolean): void;
	setResourcePack(arg0: string): void;
	setResourcePack(arg0: string, arg1: Array<number>): void;
	setRotation(arg0: number, arg1: number): void;
	setSaturation(arg0: number): void;
	setScoreboard(arg0: Scoreboard): void;
	setShoulderEntityLeft(arg0: Entity): void;
	setShoulderEntityRight(arg0: Entity): void;
	setSilent(arg0: boolean): void;
	setSleepingIgnored(arg0: boolean): void;
	setSneaking(arg0: boolean): void;
	setSpectatorTarget(arg0: Entity): void;
	setSprinting(arg0: boolean): void;
	setStatistic(arg0: Statistic, arg1: number): void;
	setStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	setStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	setSwimming(arg0: boolean): void;
	setTexturePack(arg0: string): void;
	setTicksLived(arg0: number): void;
	setTotalExperience(arg0: number): void;
	setVelocity(arg0: Vector): void;
	setWalkSpeed(arg0: number): void;
	setWhitelisted(arg0: boolean): void;
	setWindowProperty(arg0: InventoryView$Property, arg1: number): boolean;
	showPlayer(arg0: Player): void;
	showPlayer(arg0: Plugin, arg1: Player): void;
	sleep(arg0: Location, arg1: boolean): boolean;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
	stopSound(arg0: Sound): void;
	stopSound(arg0: string): void;
	stopSound(arg0: Sound, arg1: SoundCategory): void;
	stopSound(arg0: string, arg1: SoundCategory): void;
	swingMainHand(): void;
	swingOffHand(): void;
	teleport(arg0: Entity): boolean;
	teleport(arg0: Location): boolean;
	teleport(arg0: Location, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(arg0: Entity, arg1: PlayerTeleportEvent$TeleportCause): boolean;
	undiscoverRecipe(arg0: NamespacedKey): boolean;
	undiscoverRecipes(arg0: any): number;
	updateCommands(): void;
	updateInventory(): void;
	wakeup(arg0: boolean): void;
}

export default class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}

}

