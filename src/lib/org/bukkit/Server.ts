declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {PluginManager} from '../../org/bukkit/plugin/PluginManager.js'
import {Messenger} from '../../org/bukkit/plugin/messaging/Messenger.js'
import {ConsoleCommandSender} from '../../org/bukkit/command/ConsoleCommandSender.js'
import {PluginCommand} from '../../org/bukkit/command/PluginCommand.js'
import {OfflinePlayer} from '../../org/bukkit/OfflinePlayer.js'
import {BanList} from '../../org/bukkit/BanList.js'
import {BanList$Type} from '../../org/bukkit/BanList$Type.js'
import {GameMode} from '../../org/bukkit/GameMode.js'
import {Recipe} from '../../org/bukkit/inventory/Recipe.js'
import {Player} from '../../org/bukkit/entity/Player.js'
import {HelpMap} from '../../org/bukkit/help/HelpMap.js'
import {Inventory} from '../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../org/bukkit/inventory/InventoryHolder.js'
import {InventoryType} from '../../org/bukkit/event/inventory/InventoryType.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {BukkitScheduler} from '../../org/bukkit/scheduler/BukkitScheduler.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {ServicesManager} from '../../org/bukkit/plugin/ServicesManager.js'
import {WorldCreator} from '../../org/bukkit/WorldCreator.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {Merchant} from '../../org/bukkit/inventory/Merchant.js'
import {LootTable} from '../../org/bukkit/loot/LootTable.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {CachedServerIcon} from '../../org/bukkit/util/CachedServerIcon.js'
import {Tag} from '../../org/bukkit/Tag.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {ChunkGenerator$ChunkData} from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {Warning$WarningState} from '../../org/bukkit/Warning$WarningState.js'
import {KeyedBossBar} from '../../org/bukkit/boss/KeyedBossBar.js'
import {ItemFactory} from '../../org/bukkit/inventory/ItemFactory.js'
import {BossBar} from '../../org/bukkit/boss/BossBar.js'
import {BarColor} from '../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../org/bukkit/boss/BarStyle.js'
import {BarFlag} from '../../org/bukkit/boss/BarFlag.js'
import {ScoreboardManager} from '../../org/bukkit/scoreboard/ScoreboardManager.js'
import {Plugin} from '../../org/bukkit/plugin/Plugin.js'
import {PluginMessageRecipient} from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'

export interface Server extends PluginMessageRecipient {
	shutdown(): void;
	getName(): string;
	getUnsafe(): UnsafeValues;
	getLogger(): any;
	getPort(): number;
	getMap(id: number): MapView;
	createMap(world: World): MapView;
	getVersion(): string;
	getPluginManager(): PluginManager;
	getMessenger(): Messenger;
	getWorld(_name: string): World;
	getWorld(uid: string): World;
	getOnlinePlayers(): any;
	getConsoleSender(): ConsoleCommandSender;
	getPluginCommand(_name: string): PluginCommand;
	getSpawnRadius(): number;
	getOnlineMode(): boolean;
	reload(): void;
	isHardcore(): boolean;
	getViewDistance(): number;
	getOfflinePlayer(id: string): OfflinePlayer;
	getOfflinePlayer(_name: string): OfflinePlayer;
	getBukkitVersion(): string;
	savePlayers(): void;
	broadcast(message: string, permission: string): number;
	getIPBans(): any;
	getBanList(type: BanList$Type): BanList;
	getOperators(): any;
	getWorlds(): any;
	setSpawnRadius(value: number): void;
	reloadWhitelist(): void;
	setDefaultGameMode(mode: GameMode): void;
	reloadData(): void;
	getWorldContainer(): any;
	addRecipe(recipe: Recipe): boolean;
	matchPlayer(_name: string): any;
	getPlayerExact(_name: string): Player;
	clearRecipes(): void;
	getUpdateFolder(): string;
	banIP(address: string): void;
	getHelpMap(): HelpMap;
	hasWhitelist(): boolean;
	resetRecipes(): void;
	createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
	createInventory(owner: InventoryHolder, size: number): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
	getAllowFlight(): boolean;
	broadcastMessage(message: string): number;
	getAllowNether(): boolean;
	unbanIP(address: string): void;
	getRecipesFor(result: ItemStack): any;
	getBannedPlayers(): any;
	getDefaultGameMode(): GameMode;
	getOfflinePlayers(): Array<OfflinePlayer>;
	recipeIterator(): any;
	getAllowEnd(): boolean;
	setWhitelist(value: boolean): void;
	getScheduler(): BukkitScheduler;
	dispatchCommand(sender: CommandSender, commandLine: string): boolean;
	getWorldType(): string;
	createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
	createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
	getServicesManager(): ServicesManager;
	getPlayer(id: string): Player;
	getPlayer(_name: string): Player;
	unloadWorld(_name: string, save: boolean): boolean;
	unloadWorld(world: World, save: boolean): boolean;
	createWorld(creator: WorldCreator): World;
	getCommandAliases(): any;
	getMaxPlayers(): number;
	getIp(): string;
	getEntity(uuid: string): Entity;
	createMerchant(title: string): Merchant;
	getMotd(): string;
	getLootTable(key: NamespacedKey): LootTable;
	loadServerIcon(image: any): CachedServerIcon;
	loadServerIcon(file: any): CachedServerIcon;
	removeBossBar(key: NamespacedKey): boolean;
	selectEntities(sender: CommandSender, selector: string): any;
	getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
	getAdvancement(key: NamespacedKey): Advancement;
	getIdleTimeout(): number;
	getTags(registry: string, clazz: any): any;
	createBlockData(material: Material, data: string): BlockData;
	createBlockData(material: Material, consumer: any): BlockData;
	createBlockData(data: string): BlockData;
	createBlockData(material: Material): BlockData;
	createChunkData(world: World): ChunkGenerator$ChunkData;
	getBossBars(): any;
	getWarningState(): Warning$WarningState;
	setIdleTimeout(threshold: number): void;
	getBossBar(key: NamespacedKey): KeyedBossBar;
	getItemFactory(): ItemFactory;
	isPrimaryThread(): boolean;
	getShutdownMessage(): string;
	getServerIcon(): CachedServerIcon;
	createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
	createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
	getWhitelistedPlayers(): any;
	getConnectionThrottle(): number;
	getScoreboardManager(): ScoreboardManager;
	getMonsterSpawnLimit(): number;
	getGenerateStructures(): boolean;
	getTicksPerMonsterSpawns(): number;
	advancementIterator(): any;
	getAnimalSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getUpdateFolderFile(): any;
	getAmbientSpawnLimit(): number;
	getTicksPerAnimalSpawns(): number;
	sendPluginMessage(source: Plugin, channel: string, message: Array<number>): void;
	getListeningPluginChannels(): any;
}

export class Server {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Server');
	}
	public static get BROADCAST_CHANNEL_ADMINISTRATIVE(): string {
		return Server.$javaClass.BROADCAST_CHANNEL_ADMINISTRATIVE;
	}
	public static get BROADCAST_CHANNEL_USERS(): string {
		return Server.$javaClass.BROADCAST_CHANNEL_USERS;
	}
}

