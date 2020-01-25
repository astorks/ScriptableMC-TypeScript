declare var Java: any;
import {Location} from '../../../org/bukkit/Location.js'
import {Instrument} from '../../../org/bukkit/Instrument.js'
import {Note} from '../../../org/bukkit/Note.js'
import {SoundCategory} from '../../../org/bukkit/SoundCategory.js'
import {Sound} from '../../../org/bukkit/Sound.js'
import {Effect} from '../../../org/bukkit/Effect.js'
import {Material} from '../../../org/bukkit/Material.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {DyeColor} from '../../../org/bukkit/DyeColor.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {Statistic} from '../../../org/bukkit/Statistic.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {WeatherType} from '../../../org/bukkit/WeatherType.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {AdvancementProgress} from '../../../org/bukkit/advancement/AdvancementProgress.js'
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
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
import {MetadataValue} from '../../../org/bukkit/metadata/MetadataValue.js'
import {Permission} from '../../../org/bukkit/permissions/Permission.js'
import {PermissionAttachment} from '../../../org/bukkit/permissions/PermissionAttachment.js'
import {PersistentDataContainer} from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import {Projectile} from '../../../org/bukkit/entity/Projectile.js'
import {Conversation} from '../../../org/bukkit/conversations/Conversation.js'
import {ConversationAbandonedEvent} from '../../../org/bukkit/conversations/ConversationAbandonedEvent.js'
import {HumanEntity} from '../../../org/bukkit/entity/HumanEntity.js'
import {Conversable} from '../../../org/bukkit/conversations/Conversable.js'
import {OfflinePlayer} from '../../../org/bukkit/OfflinePlayer.js'
import {PluginMessageRecipient} from '../../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'

export interface Player extends HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
	getAllowFlight(): boolean;
	canSee(arg0: Player): boolean;
	setCompassTarget(arg0: Location): void;
	getCompassTarget(): Location;
	sendRawMessage(arg0: string): void;
	getPlayerListName(): string;
	setPlayerListName(arg0: string): void;
	getPlayerListHeader(): string;
	getPlayerListFooter(): string;
	setPlayerListHeader(arg0: string): void;
	setPlayerListFooter(arg0: string): void;
	setPlayerListHeaderFooter(arg0: string, arg1: string): void;
	kickPlayer(arg0: string): void;
	chat(arg0: string): void;
	performCommand(arg0: string): boolean;
	isSneaking(): boolean;
	setSneaking(arg0: boolean): void;
	isSprinting(): boolean;
	setSprinting(arg0: boolean): void;
	saveData(): void;
	loadData(): void;
	setSleepingIgnored(arg0: boolean): void;
	isSleepingIgnored(): boolean;
	playNote(arg0: Location, arg1: Instrument, arg2: Note): void;
	playNote(arg0: Location, arg1: number, arg2: number): void;
	playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void;
	playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void;
	stopSound(arg0: Sound): void;
	stopSound(arg0: string, arg1: SoundCategory): void;
	stopSound(arg0: Sound, arg1: SoundCategory): void;
	stopSound(arg0: string): void;
	playEffect(arg0: Location, arg1: Effect, arg2: number): void;
	playEffect(arg0: Location, arg1: Effect, arg2: any): void;
	sendBlockChange(arg0: Location, arg1: Material, arg2: number): void;
	sendBlockChange(arg0: Location, arg1: BlockData): void;
	sendChunkChange(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: Array<number>): boolean;
	sendSignChange(arg0: Location, arg1: Array<string>): void;
	sendSignChange(arg0: Location, arg1: Array<string>, arg2: DyeColor): void;
	sendMap(arg0: MapView): void;
	updateInventory(): void;
	incrementStatistic(arg0: Statistic, arg1: Material): void;
	incrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	incrementStatistic(arg0: Statistic): void;
	incrementStatistic(arg0: Statistic, arg1: number): void;
	decrementStatistic(arg0: Statistic, arg1: number): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType): void;
	decrementStatistic(arg0: Statistic): void;
	decrementStatistic(arg0: Statistic, arg1: Material): void;
	decrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	setStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	setStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	setStatistic(arg0: Statistic, arg1: number): void;
	getStatistic(arg0: Statistic, arg1: Material): number;
	getStatistic(arg0: Statistic): number;
	getStatistic(arg0: Statistic, arg1: EntityType): number;
	setPlayerTime(arg0: number, arg1: boolean): void;
	getPlayerTime(): number;
	getPlayerTimeOffset(): number;
	isPlayerTimeRelative(): boolean;
	resetPlayerTime(): void;
	setPlayerWeather(arg0: WeatherType): void;
	getPlayerWeather(): WeatherType;
	resetPlayerWeather(): void;
	giveExp(arg0: number): void;
	giveExpLevels(arg0: number): void;
	getExp(): number;
	setExp(arg0: number): void;
	getLevel(): number;
	setLevel(arg0: number): void;
	getTotalExperience(): number;
	setTotalExperience(arg0: number): void;
	sendExperienceChange(arg0: number): void;
	sendExperienceChange(arg0: number, arg1: number): void;
	getExhaustion(): number;
	setExhaustion(arg0: number): void;
	getSaturation(): number;
	setSaturation(arg0: number): void;
	getFoodLevel(): number;
	setFoodLevel(arg0: number): void;
	setAllowFlight(arg0: boolean): void;
	hidePlayer(arg0: Plugin, arg1: Player): void;
	hidePlayer(arg0: Player): void;
	showPlayer(arg0: Plugin, arg1: Player): void;
	showPlayer(arg0: Player): void;
	isFlying(): boolean;
	setFlying(arg0: boolean): void;
	setFlySpeed(arg0: number): void;
	setWalkSpeed(arg0: number): void;
	getFlySpeed(): number;
	getWalkSpeed(): number;
	setTexturePack(arg0: string): void;
	setResourcePack(arg0: string, arg1: Array<number>): void;
	setResourcePack(arg0: string): void;
	getScoreboard(): Scoreboard;
	setScoreboard(arg0: Scoreboard): void;
	isHealthScaled(): boolean;
	setHealthScaled(arg0: boolean): void;
	setHealthScale(arg0: number): void;
	getHealthScale(): number;
	getSpectatorTarget(): Entity;
	setSpectatorTarget(arg0: Entity): void;
	sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
	sendTitle(arg0: string, arg1: string): void;
	resetTitle(): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: any): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: any): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
	spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void;
	spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: any): void;
	getAdvancementProgress(arg0: Advancement): AdvancementProgress;
	getClientViewDistance(): number;
	getLocale(): string;
	updateCommands(): void;
	openBook(arg0: ItemStack): void;
	setDisplayName(arg0: string): void;
	getAddress(): any;
	getDisplayName(): string;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	closeInventory(): void;
	getOpenInventory(): InventoryView;
	getBedSpawnLocation(): Location;
	getEnderChest(): Inventory;
	getMainHand(): MainHand;
	setWindowProperty(arg0: InventoryView$Property, arg1: number): boolean;
	openInventory(arg0: InventoryView): void;
	openInventory(arg0: Inventory): InventoryView;
	openWorkbench(arg0: Location, arg1: boolean): InventoryView;
	openEnchanting(arg0: Location, arg1: boolean): InventoryView;
	openMerchant(arg0: Villager, arg1: boolean): InventoryView;
	openMerchant(arg0: Merchant, arg1: boolean): InventoryView;
	getItemInHand(): ItemStack;
	setItemInHand(arg0: ItemStack): void;
	getItemOnCursor(): ItemStack;
	setItemOnCursor(arg0: ItemStack): void;
	hasCooldown(arg0: Material): boolean;
	getCooldown(arg0: Material): number;
	setCooldown(arg0: Material, arg1: number): void;
	getSleepTicks(): number;
	setBedSpawnLocation(arg0: Location, arg1: boolean): void;
	setBedSpawnLocation(arg0: Location): void;
	wakeup(arg0: boolean): void;
	getBedLocation(): Location;
	getGameMode(): GameMode;
	setGameMode(arg0: GameMode): void;
	isBlocking(): boolean;
	isHandRaised(): boolean;
	getExpToLevel(): number;
	discoverRecipe(arg0: NamespacedKey): boolean;
	discoverRecipes(arg0: any): number;
	undiscoverRecipe(arg0: NamespacedKey): boolean;
	undiscoverRecipes(arg0: any): number;
	getShoulderEntityLeft(): Entity;
	setShoulderEntityLeft(arg0: Entity): void;
	getShoulderEntityRight(): Entity;
	setShoulderEntityRight(arg0: Entity): void;
	getName(): string;
	sleep(arg0: Location, arg1: boolean): boolean;
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
	getUniqueId(): string;
	acceptConversationInput(arg0: string): void;
	beginConversation(arg0: Conversation): boolean;
	abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
	abandonConversation(arg0: Conversation): void;
	isConversing(): boolean;
	getPlayer(): Player;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	hasPlayedBefore(): boolean;
	getBedSpawnLocation(): Location;
	isWhitelisted(): boolean;
	isOnline(): boolean;
	setWhitelisted(arg0: boolean): void;
	isBanned(): boolean;
	getUniqueId(): string;
	getName(): string;
	serialize(): any;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	getListeningPluginChannels(): any;
}

export class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}
}
