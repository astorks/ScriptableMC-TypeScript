declare var Java: any;
import {AdvancementProgress} from '../../../org/bukkit/advancement/AdvancementProgress.js'
import {Advancement} from '../../../org/bukkit/advancement/Advancement.js'
import {Location} from '../../../org/bukkit/Location.js'
import {SoundCategory} from '../../../org/bukkit/SoundCategory.js'
import {Sound} from '../../../org/bukkit/Sound.js'
import {Effect} from '../../../org/bukkit/Effect.js'
import {Particle} from '../../../org/bukkit/Particle.js'
import {Plugin} from '../../../org/bukkit/plugin/Plugin.js'
import {DyeColor} from '../../../org/bukkit/DyeColor.js'
import {Statistic} from '../../../org/bukkit/Statistic.js'
import {EntityType} from '../../../org/bukkit/entity/EntityType.js'
import {Material} from '../../../org/bukkit/Material.js'
import {WeatherType} from '../../../org/bukkit/WeatherType.js'
import {MapView} from '../../../org/bukkit/map/MapView.js'
import {Instrument} from '../../../org/bukkit/Instrument.js'
import {Note} from '../../../org/bukkit/Note.js'
import {BlockData} from '../../../org/bukkit/block/data/BlockData.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {Scoreboard} from '../../../org/bukkit/scoreboard/Scoreboard.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Inventory} from '../../../org/bukkit/inventory/Inventory.js'
import {PlayerInventory} from '../../../org/bukkit/inventory/PlayerInventory.js'
import {InventoryView} from '../../../org/bukkit/inventory/InventoryView.js'
import {NamespacedKey} from '../../../org/bukkit/NamespacedKey.js'
import {Merchant} from '../../../org/bukkit/inventory/Merchant.js'
import {Villager} from '../../../org/bukkit/entity/Villager.js'
import {MainHand} from '../../../org/bukkit/inventory/MainHand.js'
import {GameMode} from '../../../org/bukkit/GameMode.js'
import {InventoryView$Property} from '../../../org/bukkit/inventory/InventoryView$Property.js'
import {MemoryKey} from '../../../org/bukkit/entity/memory/MemoryKey.js'
import {Block} from '../../../org/bukkit/block/Block.js'
import {PotionEffect} from '../../../org/bukkit/potion/PotionEffect.js'
import {PotionEffectType} from '../../../org/bukkit/potion/PotionEffectType.js'
import {FluidCollisionMode} from '../../../org/bukkit/FluidCollisionMode.js'
import {RayTraceResult} from '../../../org/bukkit/util/RayTraceResult.js'
import {EntityEquipment} from '../../../org/bukkit/inventory/EntityEquipment.js'
import {AttributeInstance} from '../../../org/bukkit/attribute/AttributeInstance.js'
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {Server} from '../../../org/bukkit/Server.js'
import {World} from '../../../org/bukkit/World.js'
import {PistonMoveReaction} from '../../../org/bukkit/block/PistonMoveReaction.js'
import {EntityEffect} from '../../../org/bukkit/EntityEffect.js'
import {PlayerTeleportEvent$TeleportCause} from '../../../org/bukkit/event/player/PlayerTeleportEvent$TeleportCause.js'
import {Vector} from '../../../org/bukkit/util/Vector.js'
import {BoundingBox} from '../../../org/bukkit/util/BoundingBox.js'
import {EntityDamageEvent} from '../../../org/bukkit/event/entity/EntityDamageEvent.js'
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
	getAddress(): any;
	setLevel(level: number): void;
	getLevel(): number;
	getDisplayName(): string;
	getAllowFlight(): boolean;
	canSee(player: Player): boolean;
	getClientViewDistance(): number;
	getPlayerListFooter(): string;
	setPlayerListHeader(header: string): void;
	setPlayerListHeaderFooter(header: string, footer: string): void;
	setPlayerListFooter(footer: string): void;
	getPlayerTimeOffset(): number;
	getPlayerListHeader(): string;
	isPlayerTimeRelative(): boolean;
	getAdvancementProgress(advancement: Advancement): AdvancementProgress;
	setDisplayName(_name: string): void;
	playSound(location: Location, sound: string, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, category: SoundCategory, volume: number, pitch: number): void;
	playSound(location: Location, sound: string, volume: number, pitch: number): void;
	playSound(location: Location, sound: Sound, volume: number, pitch: number): void;
	playEffect(loc: Location, effect: Effect, data: any): void;
	playEffect(loc: Location, effect: Effect, data: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number, data: any): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number, extra: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, data: any): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, x: number, y: number, z: number, count: number, offsetX: number, offsetY: number, offsetZ: number): void;
	spawnParticle(particle: Particle, location: Location, count: number, offsetX: number, offsetY: number, offsetZ: number, data: any): void;
	sendRawMessage(message: string): void;
	getFoodLevel(): number;
	setFoodLevel(value: number): void;
	resetPlayerWeather(): void;
	giveExp(amount: number): void;
	getTotalExperience(): number;
	setCompassTarget(loc: Location): void;
	loadData(): void;
	setTotalExperience(exp: number): void;
	setExhaustion(value: number): void;
	setSneaking(sneak: boolean): void;
	setAllowFlight(flight: boolean): void;
	hidePlayer(player: Player): void;
	hidePlayer(plugin: Plugin, player: Player): void;
	showPlayer(plugin: Plugin, player: Player): void;
	showPlayer(player: Player): void;
	setFlying(value: boolean): void;
	setSprinting(sprinting: boolean): void;
	sendSignChange(loc: Location, lines: Array<string>, dyeColor: DyeColor): void;
	sendSignChange(loc: Location, lines: Array<string>): void;
	incrementStatistic(statistic: Statistic): void;
	incrementStatistic(statistic: Statistic, amount: number): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	incrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	incrementStatistic(statistic: Statistic, material: Material): void;
	incrementStatistic(statistic: Statistic, entityType: EntityType): void;
	updateInventory(): void;
	setPlayerTime(time: number, relative: boolean): void;
	getPlayerWeather(): WeatherType;
	sendMap(map: MapView): void;
	getStatistic(statistic: Statistic): number;
	getStatistic(statistic: Statistic, material: Material): number;
	getStatistic(statistic: Statistic, entityType: EntityType): number;
	resetPlayerTime(): void;
	setPlayerWeather(type: WeatherType): void;
	setExp(exp: number): void;
	isFlying(): boolean;
	setStatistic(statistic: Statistic, newValue: number): void;
	setStatistic(statistic: Statistic, material: Material, newValue: number): void;
	setStatistic(statistic: Statistic, entityType: EntityType, newValue: number): void;
	getExp(): number;
	setFlySpeed(value: number): void;
	setWalkSpeed(value: number): void;
	getCompassTarget(): Location;
	playNote(loc: Location, instrument: number, note: number): void;
	playNote(loc: Location, instrument: Instrument, note: Note): void;
	getExhaustion(): number;
	getFlySpeed(): number;
	saveData(): void;
	getPlayerListName(): string;
	isSleepingIgnored(): boolean;
	isSprinting(): boolean;
	sendBlockChange(loc: Location, material: Material, data: number): void;
	sendBlockChange(loc: Location, block: BlockData): void;
	decrementStatistic(statistic: Statistic, material: Material, amount: number): void;
	decrementStatistic(statistic: Statistic, material: Material): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType): void;
	decrementStatistic(statistic: Statistic, entityType: EntityType, amount: number): void;
	decrementStatistic(statistic: Statistic): void;
	decrementStatistic(statistic: Statistic, amount: number): void;
	chat(msg: string): void;
	getPlayerTime(): number;
	setPlayerListName(_name: string): void;
	setSleepingIgnored(isSleeping: boolean): void;
	kickPlayer(message: string): void;
	performCommand(command: string): boolean;
	isSneaking(): boolean;
	getSaturation(): number;
	stopSound(sound: string, category: SoundCategory): void;
	stopSound(sound: string): void;
	stopSound(sound: Sound, category: SoundCategory): void;
	stopSound(sound: Sound): void;
	sendChunkChange(loc: Location, sx: number, sy: number, sz: number, data: Array<number>): boolean;
	giveExpLevels(amount: number): void;
	setSaturation(value: number): void;
	getSpectatorTarget(): Entity;
	getScoreboard(): Scoreboard;
	isHealthScaled(): boolean;
	openBook(book: ItemStack): void;
	setSpectatorTarget(entity: Entity): void;
	setHealthScale(scale: number): void;
	setScoreboard(scoreboard: Scoreboard): void;
	setResourcePack(url: string, hash: Array<number>): void;
	setResourcePack(url: string): void;
	setTexturePack(url: string): void;
	resetTitle(): void;
	getWalkSpeed(): number;
	setHealthScaled(scale: boolean): void;
	sendTitle(title: string, subtitle: string): void;
	sendTitle(title: string, subtitle: string, fadeIn: number, stay: number, fadeOut: number): void;
	getLocale(): string;
	getHealthScale(): number;
	updateCommands(): void;
	getName(): string;
	getName(): string;
	sleep(location: Location, force: boolean): boolean;
	closeInventory(): void;
	getInventory(): Inventory;
	getInventory(): PlayerInventory;
	getOpenInventory(): InventoryView;
	getBedSpawnLocation(): Location;
	getBedSpawnLocation(): Location;
	setShoulderEntityLeft(entity: Entity): void;
	getShoulderEntityRight(): Entity;
	setShoulderEntityRight(entity: Entity): void;
	setBedSpawnLocation(location: Location): void;
	setBedSpawnLocation(location: Location, force: boolean): void;
	getShoulderEntityLeft(): Entity;
	discoverRecipe(recipe: NamespacedKey): boolean;
	discoverRecipes(recipes: any): number;
	getBedLocation(): Location;
	undiscoverRecipes(recipes: any): number;
	getExpToLevel(): number;
	getCooldown(material: Material): number;
	getItemOnCursor(): ItemStack;
	openInventory(inventory: InventoryView): void;
	openInventory(inventory: Inventory): InventoryView;
	setItemInHand(item: ItemStack): void;
	hasCooldown(material: Material): boolean;
	setCooldown(material: Material, ticks: number): void;
	openMerchant(merchant: Merchant, force: boolean): InventoryView;
	openMerchant(trader: Villager, force: boolean): InventoryView;
	getSleepTicks(): number;
	wakeup(setSpawnLocation: boolean): void;
	getMainHand(): MainHand;
	setGameMode(mode: GameMode): void;
	openEnchanting(location: Location, force: boolean): InventoryView;
	openWorkbench(location: Location, force: boolean): InventoryView;
	isHandRaised(): boolean;
	undiscoverRecipe(recipe: NamespacedKey): boolean;
	setWindowProperty(prop: InventoryView$Property, value: number): boolean;
	getItemInHand(): ItemStack;
	setItemOnCursor(item: ItemStack): void;
	getEnderChest(): Inventory;
	getGameMode(): GameMode;
	isBlocking(): boolean;
	setMemory(memoryKey: MemoryKey, memoryValue: any): void;
	getEyeLocation(): Location;
	getTargetBlock(transparent: any, maxDistance: number): Block;
	setNoDamageTicks(ticks: number): void;
	addPotionEffect(effect: PotionEffect): boolean;
	addPotionEffect(effect: PotionEffect, force: boolean): boolean;
	getMaximumAir(): number;
	setMaximumAir(ticks: number): void;
	getLastDamage(): number;
	setLastDamage(damage: number): void;
	getLineOfSight(transparent: any, maxDistance: number): any;
	setRemainingAir(ticks: number): void;
	getRemainingAir(): number;
	getEyeHeight(): number;
	getEyeHeight(ignorePose: boolean): number;
	getNoDamageTicks(): number;
	getKiller(): Player;
	addPotionEffects(effects: any): boolean;
	hasPotionEffect(type: PotionEffectType): boolean;
	getPotionEffect(type: PotionEffectType): PotionEffect;
	removePotionEffect(type: PotionEffectType): void;
	getRemoveWhenFarAway(): boolean;
	setMaximumNoDamageTicks(ticks: number): void;
	setRemoveWhenFarAway(remove: boolean): void;
	getMaximumNoDamageTicks(): number;
	getLastTwoTargetBlocks(transparent: any, maxDistance: number): any;
	getTargetBlockExact(maxDistance: number, fluidCollisionMode: FluidCollisionMode): Block;
	getTargetBlockExact(maxDistance: number): Block;
	getActivePotionEffects(): any;
	rayTraceBlocks(maxDistance: number): RayTraceResult;
	rayTraceBlocks(maxDistance: number, fluidCollisionMode: FluidCollisionMode): RayTraceResult;
	isSwimming(): boolean;
	isRiptiding(): boolean;
	setGliding(gliding: boolean): void;
	setAI(ai: boolean): void;
	hasLineOfSight(other: Entity): boolean;
	isGliding(): boolean;
	setCanPickupItems(pickup: boolean): void;
	getLeashHolder(): Entity;
	setSwimming(swimming: boolean): void;
	getMemory(memoryKey: MemoryKey): any;
	setLeashHolder(holder: Entity): boolean;
	setCollidable(collidable: boolean): void;
	getEquipment(): EntityEquipment;
	hasAI(): boolean;
	isLeashed(): boolean;
	isCollidable(): boolean;
	getCanPickupItems(): boolean;
	isSleeping(): boolean;
	getAttribute(attribute: Attribute): AttributeInstance;
	damage(amount: number): void;
	damage(amount: number, source: Entity): void;
	getAbsorptionAmount(): number;
	setAbsorptionAmount(amount: number): void;
	getMaxHealth(): number;
	resetMaxHealth(): void;
	setHealth(health: number): void;
	getHealth(): number;
	setMaxHealth(health: number): void;
	remove(): void;
	isEmpty(): boolean;
	getLocation(): Location;
	getLocation(loc: Location): Location;
	getType(): EntityType;
	addPassenger(passenger: Entity): boolean;
	getPassengers(): any;
	getServer(): Server;
	getWorld(): World;
	isValid(): boolean;
	setCustomNameVisible(flag: boolean): void;
	removeScoreboardTag(tag: string): boolean;
	isCustomNameVisible(): boolean;
	getPistonMoveReaction(): PistonMoveReaction;
	getNearbyEntities(x: number, y: number, z: number): any;
	playEffect(type: EntityEffect): void;
	teleport(location: Location, cause: PlayerTeleportEvent$TeleportCause): boolean;
	teleport(location: Location): boolean;
	teleport(destination: Entity): boolean;
	teleport(destination: Entity, cause: PlayerTeleportEvent$TeleportCause): boolean;
	getMaxFireTicks(): number;
	isDead(): boolean;
	isPersistent(): boolean;
	getEntityId(): number;
	setFireTicks(ticks: number): void;
	setPersistent(persistent: boolean): void;
	getWidth(): number;
	getPassenger(): Entity;
	setRotation(yaw: number, pitch: number): void;
	getFireTicks(): number;
	setPassenger(passenger: Entity): boolean;
	getHeight(): number;
	getVelocity(): Vector;
	setVelocity(velocity: Vector): void;
	getBoundingBox(): BoundingBox;
	isOnGround(): boolean;
	getLastDamageCause(): EntityDamageEvent;
	leaveVehicle(): boolean;
	setGlowing(flag: boolean): void;
	isInsideVehicle(): boolean;
	setFallDistance(distance: number): void;
	setSilent(flag: boolean): void;
	setGravity(gravity: boolean): void;
	setLastDamageCause(event: EntityDamageEvent): void;
	getPortalCooldown(): number;
	getFacing(): BlockFace;
	isSilent(): boolean;
	getFallDistance(): number;
	isInvulnerable(): boolean;
	getScoreboardTags(): any;
	hasGravity(): boolean;
	getVehicle(): Entity;
	setPortalCooldown(cooldown: number): void;
	setTicksLived(value: number): void;
	getTicksLived(): number;
	isGlowing(): boolean;
	removePassenger(passenger: Entity): boolean;
	eject(): boolean;
	getUniqueId(): string;
	getUniqueId(): string;
	addScoreboardTag(tag: string): boolean;
	setInvulnerable(flag: boolean): void;
	getPose(): Pose;
	removeMetadata(metadataKey: string, owningPlugin: Plugin): void;
	getMetadata(metadataKey: string): any;
	hasMetadata(metadataKey: string): boolean;
	setMetadata(metadataKey: string, newMetadataValue: MetadataValue): void;
	sendMessage(messages: Array<string>): void;
	sendMessage(message: string): void;
	hasPermission(_name: string): boolean;
	hasPermission(perm: Permission): boolean;
	recalculatePermissions(): void;
	getEffectivePermissions(): any;
	removeAttachment(attachment: PermissionAttachment): void;
	addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
	addAttachment(plugin: Plugin): PermissionAttachment;
	addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
	isPermissionSet(_name: string): boolean;
	isPermissionSet(perm: Permission): boolean;
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
	beginConversation(conversation: Conversation): boolean;
	isConversing(): boolean;
	getPlayer(): Player;
	isBanned(): boolean;
	isOnline(): boolean;
	setWhitelisted(value: boolean): void;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	isWhitelisted(): boolean;
	hasPlayedBefore(): boolean;
	serialize(): any;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
}

export class Player {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Player');
	}
}

