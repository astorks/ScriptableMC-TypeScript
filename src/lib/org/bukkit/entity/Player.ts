declare var Java: any;
import {AdvancementProgress} from '../../../org/bukkit/advancement/AdvancementProgress.js'
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Location} from '../../../org/bukkit/Location.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../../org/bukkit/Material.js'
import {SoundCategory} from '../../../org/bukkit/SoundCategory.js'
import {Sound} from '../../../org/bukkit/Sound.js'
import {WeatherType} from '../../../org/bukkit/WeatherType.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {Statistic} from '../../../org/bukkit/Statistic.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {DyeColor} from '../../../org/bukkit/DyeColor.js'
import {Effect} from '../../../org/bukkit/Effect.js'
import {Instrument} from '../../../org/bukkit/Instrument.js'
import {Note} from '../../../org/bukkit/Note.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {BlockFace} from '../../../org/bukkit/block/BlockFace.js'
import {Pose} from '../../../org/bukkit/entity/Pose.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
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
	getAddress(): any;
	getDisplayName(): string;
	canSee(player: Player): boolean;
	getAllowFlight(): boolean;
	getFoodLevel(): number;
	getPlayerListHeader(): string;
	getPlayerListFooter(): string;
	setPlayerListFooter(footer: string): void;
	setPlayerListHeader(header: string): void;
	setPlayerListHeaderFooter(header: string, footer: string): void;
	getAdvancementProgress(advancement: Advancement): AdvancementProgress;
	getPlayerTimeOffset(): number;
	getClientViewDistance(): number;
	isPlayerTimeRelative(): boolean;
	setFoodLevel(value: number): void;
	isFlying(): boolean;
	setScoreboard(scoreboard: Scoreboard): void;
	sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
	sendTitle(title: string, subtitle: string): void;
	openBook(book: ItemStack): void;
	setTexturePack(url: string): void;
	setSpectatorTarget(entity: Entity): void;
	isHealthScaled(): boolean;
	getLocale(): string;
	setFlying(value: boolean): void;
	setHealthScale(scale: number): void;
	updateCommands(): void;
	setFlySpeed(value: number): void;
	getScoreboard(): Scoreboard;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	getHealthScale(): number;
	getSpectatorTarget(): Entity;
	resetTitle(): void;
	getFlySpeed(): number;
	showPlayer(player: Player): void;
	showPlayer(plugin: Plugin, player: Player): void;
	hidePlayer(player: Player): void;
	hidePlayer(plugin: Plugin, player: Player): void;
	setHealthScaled(scale: boolean): void;
	setWalkSpeed(value: number): void;
	setResourcePack(url: string, hash: Array<number>): void;
	setResourcePack(url: string): void;
	getWalkSpeed(): number;
	setAllowFlight(flight: boolean): void;
	setSprinting(sprinting: boolean): void;
	sendBlockChange(loc: Location, block: BlockData): void;
	sendBlockChange(loc: Location, material: Material, data: number): void;
	getPlayerListName(): string;
	stopSound(sound: string, category: SoundCategory): void;
	stopSound(sound: Sound, category: SoundCategory): void;
	stopSound(sound: string): void;
	stopSound(sound: Sound): void;
	setPlayerTime(time: number, relative: boolean): void;
	getPlayerTime(): number;
	setSneaking(sneak: boolean): void;
	resetPlayerTime(): void;
	getPlayerWeather(): WeatherType;
	giveExp(amount: number): void;
	setDisplayName(_name: string): void;
	getExp(): number;
	sendRawMessage(message: string): void;
	sendMap(map: MapView): void;
	setPlayerListName(_name: string): void;
	setExp(exp: number): void;
	getLevel(): number;
	performCommand(command: string): boolean;
	setSleepingIgnored(isSleeping: boolean): void;
	getStatistic(statistic: Statistic, entityType: EntityType): number;
	getStatistic(statistic: Statistic): number;
	getStatistic(statistic: Statistic, material: Material): number;
	isSneaking(): boolean;
	chat(msg: string): void;
	incrementStatistic(statistic: Statistic, material: Material): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	incrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType): void;
	incrementStatistic(statistic: Statistic): void;
	incrementStatistic(statistic: Statistic, amount: number): void;
	loadData(): void;
	setLevel(level: number): void;
	getTotalExperience(): number;
	setStatistic(statistic: Statistic, newValue: number): void;
	setStatistic(statistic: Statistic, entityType: EntityType, newValue: number): void;
	setStatistic(statistic: Statistic, material: Material, newValue: number): void;
	setTotalExperience(exp: number): void;
	updateInventory(): void;
	sendSignChange(loc: Location, lines: Array<string>): void;
	sendSignChange(loc: Location, lines: Array<string>, dyeColor: DyeColor): void;
	giveExpLevels(amount: number): void;
	isSprinting(): boolean;
	kickPlayer(message: string): void;
	getCompassTarget(): Location;
	saveData(): void;
	getExhaustion(): number;
	getSaturation(): number;
	setSaturation(value: number): void;
	playEffect(loc: Location, effect: Effect, data: any): void;
	playEffect(loc: Location, effect: Effect, data: number): void;
	setExhaustion(value: number): void;
	sendChunkChange(loc: Location, sx: number, sy: number, sz: number, data: Array<number>): boolean;
	setPlayerWeather(type: WeatherType): void;
	resetPlayerWeather(): void;
	isSleepingIgnored(): boolean;
	decrementStatistic(statistic: Statistic, entityType: EntityType): void;
	decrementStatistic(statistic: Statistic): void;
	decrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	decrementStatistic(statistic: Statistic, amount: number): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	decrementStatistic(statistic: Statistic, material: Material): void;
	playNote(loc: Location, instrument: number, note: number): void;
	playNote(loc: Location, instrument: Instrument, note: Note): void;
	setCompassTarget(loc: Location): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	getName(): string;
	getName(): string;
	sleep(location: Location, force: boolean): boolean;
	getOpenInventory(): InventoryView;
	closeInventory(): void;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	getBedSpawnLocation(): Location;
	getBedSpawnLocation(): Location;
	setBedSpawnLocation(location: Location): void;
	setBedSpawnLocation(location: Location, force: boolean): void;
	setShoulderEntityRight(entity: Entity): void;
	setShoulderEntityLeft(entity: Entity): void;
	getShoulderEntityLeft(): Entity;
	getShoulderEntityRight(): Entity;
	getCooldown(material: Material): number;
	getEnderChest(): Inventory;
	setCooldown(material: Material, ticks: number): void;
	setWindowProperty(prop: InventoryView$Property, value: number): boolean;
	openMerchant(merchant: Merchant, force: boolean): InventoryView;
	openMerchant(trader: Villager, force: boolean): InventoryView;
	openWorkbench(location: Location, force: boolean): InventoryView;
	getSleepTicks(): number;
	setItemOnCursor(item: ItemStack): void;
	wakeup(setSpawnLocation: boolean): void;
	getBedLocation(): Location;
	getMainHand(): MainHand;
	openInventory(inventory: InventoryView): void;
	openInventory(inventory: Inventory): InventoryView;
	openEnchanting(location: Location, force: boolean): InventoryView;
	getItemInHand(): ItemStack;
	getItemOnCursor(): ItemStack;
	setItemInHand(item: ItemStack): void;
	hasCooldown(material: Material): boolean;
	isBlocking(): boolean;
	discoverRecipes(recipes: any): number;
	getGameMode(): GameMode;
	undiscoverRecipe(recipe: NamespacedKey): boolean;
	undiscoverRecipes(recipes: any): number;
	setGameMode(mode: GameMode): void;
	getExpToLevel(): number;
	discoverRecipe(recipe: NamespacedKey): boolean;
	isHandRaised(): boolean;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	getRemoveWhenFarAway(): boolean;
	setRemoveWhenFarAway(remove: boolean): void;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	setMaximumNoDamageTicks(ticks: number): void;
	getMaximumNoDamageTicks(): number;
	getActivePotionEffects(): any;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	getLineOfSight(transparent: any, maxDistance: number): any;
	getKiller(): Player;
	getEquipment(): EntityEquipment;
	setCanPickupItems(pickup: boolean): void;
	setRemainingAir(ticks: number): void;
	getMaximumAir(): number;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	setNoDamageTicks(ticks: number): void;
	hasPotionEffect(type: PotionEffectType): boolean;
	getRemainingAir(): number;
	getEyeHeight(ignorePose: boolean): number;
	getEyeHeight(): number;
	getEyeLocation(): Location;
	getLastDamage(): number;
	addPotionEffect(effect: PotionEffect): boolean;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	addPotionEffects(effects: any): boolean;
	removePotionEffect(type: PotionEffectType): void;
	setLastDamage(damage: number): void;
	isLeashed(): boolean;
	hasLineOfSight(other: Entity): boolean;
	getLeashHolder(): Entity;
	setLeashHolder(holder: Entity): boolean;
	setGliding(gliding: boolean): void;
	isSwimming(): boolean;
	getCanPickupItems(): boolean;
	setSwimming(swimming: boolean): void;
	isRiptiding(): boolean;
	setAI(ai: boolean): void;
	hasAI(): boolean;
	setCollidable(collidable: boolean): void;
	isCollidable(): boolean;
	isGliding(): boolean;
	setMaximumAir(ticks: number): void;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	getMemory(memoryKey: MemoryKey): any;
	getNoDamageTicks(): number;
	isSleeping(): boolean;
	getAttribute(attribute: Attribute): AttributeInstance;
	getHealth(): number;
	setHealth(health: number): void;
	setMaxHealth(health: number): void;
	getMaxHealth(): number;
	resetMaxHealth(): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(amount: number): void;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	getServer(): Server;
	isValid(): boolean;
	getWorld(): World;
	getEntityId(): number;
	isInsideVehicle(): boolean;
	setGlowing(flag: boolean): void;
	isGlowing(): boolean;
	leaveVehicle(): boolean;
	getBoundingBox(): BoundingBox;
	isInvulnerable(): boolean;
	isSilent(): boolean;
	getPortalCooldown(): number;
	getVehicle(): Entity;
	getFacing(): BlockFace;
	addPassenger(passenger: Entity): boolean;
	setSilent(flag: boolean): void;
	getPose(): Pose;
	getFallDistance(): number;
	setRotation(yaw: number, pitch: number): void;
	getLastDamageCause(): EntityDamageEvent;
	setInvulnerable(flag: boolean): void;
	setPersistent(persistent: boolean): void;
	getMaxFireTicks(): number;
	isPersistent(): boolean;
	getPassenger(): Entity;
	setGravity(gravity: boolean): void;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(location: Location): boolean;
	teleport(destination: Entity): boolean;
	getHeight(): number;
	setPortalCooldown(cooldown: number): void;
	isDead(): boolean;
	getNearbyEntities(x: number, y: number, z: number): any;
	getScoreboardTags(): any;
	setVelocity(velocity: Vector): void;
	addScoreboardTag(tag: string): boolean;
	setPassenger(passenger: Entity): boolean;
	hasGravity(): boolean;
	isOnGround(): boolean;
	getTicksLived(): number;
	setTicksLived(value: number): void;
	setFallDistance(distance: number): void;
	getPassengers(): any;
	getFireTicks(): number;
	setFireTicks(ticks: number): void;
	removePassenger(passenger: Entity): boolean;
	eject(): boolean;
	setLastDamageCause(event: EntityDamageEvent): void;
	getVelocity(): Vector;
	getWidth(): number;
	getPistonMoveReaction(): PistonMoveReaction;
	setCustomNameVisible(flag: boolean): void;
	isCustomNameVisible(): boolean;
	removeScoreboardTag(tag: string): boolean;
	playEffect(type: EntityEffect): void;
	getUniqueId(): string;
	getUniqueId(): string;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(perm: Permission): boolean;
	hasPermission(_name: string): boolean;
	getEffectivePermissions(): any;
	recalculatePermissions(): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	removeAttachment(attachment: PermissionAttachment): void;
	isPermissionSet(perm: Permission): boolean;
	isPermissionSet(_name: string): boolean;
	isOp(): boolean;
	setOp(value: boolean): void;
	getCustomName(): string;
	setCustomName(_name: string): void;
	getPersistentDataContainer(): PersistentDataContainer;
	launchProjectile(projectile: any): Projectile;
	launchProjectile(projectile: any, velocity: Vector): Projectile;
	abandonConversation(conversation: Conversation, details: ConversationAbandonedEvent): void;
	abandonConversation(conversation: Conversation): void;
	acceptConversationInput(input: string): void;
	isConversing(): boolean;
	beginConversation(conversation: Conversation): boolean;
	getPlayer(): Player;
	isBanned(): boolean;
	hasPlayedBefore(): boolean;
	setWhitelisted(value: boolean): void;
	isWhitelisted(): boolean;
	isOnline(): boolean;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	serialize(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
}

export class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}
}

