declare var Java: any;
import {UnsafeValues} from '../../org/bukkit/UnsafeValues.js'
import {MapView} from '../../org/bukkit/map/MapView.js'
import {World} from '../../org/bukkit/World.js'
import {PluginManager} from '../../org/bukkit/plugin/PluginManager.js'
import {Messenger} from '../../org/bukkit/plugin/messaging/Messenger.js'
import {PluginCommand} from '../../org/bukkit/command/PluginCommand.js'
import {ConsoleCommandSender} from '../../org/bukkit/command/ConsoleCommandSender.js'
import {Warning$WarningState} from '../../org/bukkit/Warning$WarningState.js'
import {CachedServerIcon} from '../../org/bukkit/util/CachedServerIcon.js'
import {GameMode} from '../../org/bukkit/GameMode.js'
import {ItemFactory} from '../../org/bukkit/inventory/ItemFactory.js'
import {BanList} from '../../org/bukkit/BanList.js'
import {BanList$Type} from '../../org/bukkit/BanList$Type.js'
import {Merchant} from '../../org/bukkit/inventory/Merchant.js'
import {Player} from '../../org/bukkit/entity/Player.js'
import {ItemStack} from '../../org/bukkit/inventory/ItemStack.js'
import {Inventory} from '../../org/bukkit/inventory/Inventory.js'
import {InventoryHolder} from '../../org/bukkit/inventory/InventoryHolder.js'
import {InventoryType} from '../../org/bukkit/event/inventory/InventoryType.js'
import {OfflinePlayer} from '../../org/bukkit/OfflinePlayer.js'
import {HelpMap} from '../../org/bukkit/help/HelpMap.js'
import {Location} from '../../org/bukkit/Location.js'
import {StructureType} from '../../org/bukkit/StructureType.js'
import {BukkitScheduler} from '../../org/bukkit/scheduler/BukkitScheduler.js'
import {WorldCreator} from '../../org/bukkit/WorldCreator.js'
import {Recipe} from '../../org/bukkit/inventory/Recipe.js'
import {ServicesManager} from '../../org/bukkit/plugin/ServicesManager.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {BlockData} from '../../org/bukkit/block/data/BlockData.js'
import {Material} from '../../org/bukkit/Material.js'
import {Tag} from '../../org/bukkit/Tag.js'
import {NamespacedKey} from '../../org/bukkit/NamespacedKey.js'
import {Entity} from '../../org/bukkit/entity/Entity.js'
import {KeyedBossBar} from '../../org/bukkit/boss/KeyedBossBar.js'
import {Advancement} from '../../org/bukkit/advancement/Advancement.js'
import {BossBar} from '../../org/bukkit/boss/BossBar.js'
import {BarColor} from '../../org/bukkit/boss/BarColor.js'
import {BarStyle} from '../../org/bukkit/boss/BarStyle.js'
import {BarFlag} from '../../org/bukkit/boss/BarFlag.js'
import {ChunkGenerator$ChunkData} from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import {LootTable} from '../../org/bukkit/loot/LootTable.js'
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
	getBukkitVersion(): string;
	getOnlinePlayers(): any;
	getMaxPlayers(): number;
	getViewDistance(): number;
	getWorldType(): string;
	getIp(): string;
	getPluginCommand(_name: string): PluginCommand;
	getIPBans(): any;
	getConsoleSender(): ConsoleCommandSender;
	getWarningState(): Warning$WarningState;
	getServerIcon(): CachedServerIcon;
	unloadWorld(_name: string, save: boolean): boolean;
	unloadWorld(world: World, save: boolean): boolean;
	setDefaultGameMode(mode: GameMode): void;
	getItemFactory(): ItemFactory;
	reloadData(): void;
	recipeIterator(): any;
	reloadWhitelist(): void;
	getBanList(type: BanList$Type): BanList;
	createMerchant(title: string): Merchant;
	getSpawnRadius(): number;
	getWorldContainer(): any;
	getWorld(_name: string): World;
	getWorld(uid: string): World;
	getPlayerExact(_name: string): Player;
	setWhitelist(value: boolean): void;
	getAllowNether(): boolean;
	getWorlds(): any;
	getUpdateFolder(): string;
	broadcastMessage(message: string): number;
	getRecipesFor(result: ItemStack): any;
	banIP(address: string): void;
	getAllowFlight(): boolean;
	getBannedPlayers(): any;
	getOperators(): any;
	createInventory(owner: InventoryHolder, size: number): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
	createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
	createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
	getOfflinePlayers(): Array<OfflinePlayer>;
	clearRecipes(): void;
	getHelpMap(): HelpMap;
	getAllowEnd(): boolean;
	getPlayer(_name: string): Player;
	getPlayer(id: string): Player;
	getMotd(): string;
	savePlayers(): void;
	createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
	createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
	getShutdownMessage(): string;
	setSpawnRadius(value: number): void;
	getDefaultGameMode(): GameMode;
	getScheduler(): BukkitScheduler;
	createWorld(creator: WorldCreator): World;
	matchPlayer(_name: string): any;
	resetRecipes(): void;
	isHardcore(): boolean;
	getOfflinePlayer(id: string): OfflinePlayer;
	getOfflinePlayer(_name: string): OfflinePlayer;
	unbanIP(address: string): void;
	addRecipe(recipe: Recipe): boolean;
	isPrimaryThread(): boolean;
	loadServerIcon(file: any): CachedServerIcon;
	loadServerIcon(image: any): CachedServerIcon;
	setIdleTimeout(threshold: number): void;
	getCommandAliases(): any;
	hasWhitelist(): boolean;
	getServicesManager(): ServicesManager;
	broadcast(message: string, permission: string): number;
	dispatchCommand(sender: CommandSender, commandLine: string): boolean;
	reload(): void;
	getOnlineMode(): boolean;
	createBlockData(data: string): BlockData;
	createBlockData(material: Material, consumer: any): BlockData;
	createBlockData(material: Material): BlockData;
	createBlockData(material: Material, data: string): BlockData;
	getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
	selectEntities(sender: CommandSender, selector: string): any;
	getEntity(uuid: string): Entity;
	getTags(registry: string, clazz: any): any;
	getIdleTimeout(): number;
	getBossBar(key: NamespacedKey): KeyedBossBar;
	getAdvancement(key: NamespacedKey): Advancement;
	createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
	createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
	removeBossBar(key: NamespacedKey): boolean;
	createChunkData(world: World): ChunkGenerator$ChunkData;
	getLootTable(key: NamespacedKey): LootTable;
	getBossBars(): any;
	getAnimalSpawnLimit(): number;
	getGenerateStructures(): boolean;
	getTicksPerMonsterSpawns(): number;
	getWhitelistedPlayers(): any;
	getConnectionThrottle(): number;
	getUpdateFolderFile(): any;
	advancementIterator(): any;
	getTicksPerAnimalSpawns(): number;
	getWaterAnimalSpawnLimit(): number;
	getMonsterSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	getScoreboardManager(): ScoreboardManager;
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

