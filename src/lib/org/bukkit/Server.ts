declare var Java: any;
import Advancement from '../../org/bukkit/advancement/Advancement.js'
import BanList from '../../org/bukkit/BanList.js'
import BanList$Type from '../../org/bukkit/BanList$Type.js'
import BarColor from '../../org/bukkit/boss/BarColor.js'
import BarFlag from '../../org/bukkit/boss/BarFlag.js'
import BarStyle from '../../org/bukkit/boss/BarStyle.js'
import BlockData from '../../org/bukkit/block/data/BlockData.js'
import BossBar from '../../org/bukkit/boss/BossBar.js'
import BukkitScheduler from '../../org/bukkit/scheduler/BukkitScheduler.js'
import CachedServerIcon from '../../org/bukkit/util/CachedServerIcon.js'
import ChunkGenerator$ChunkData from '../../org/bukkit/generator/ChunkGenerator$ChunkData.js'
import CommandSender from '../../org/bukkit/command/CommandSender.js'
import ConsoleCommandSender from '../../org/bukkit/command/ConsoleCommandSender.js'
import Entity from '../../org/bukkit/entity/Entity.js'
import File from '../../java/io/File.js'
import GameMode from '../../org/bukkit/GameMode.js'
import HelpMap from '../../org/bukkit/help/HelpMap.js'
import Inventory from '../../org/bukkit/inventory/Inventory.js'
import InventoryHolder from '../../org/bukkit/inventory/InventoryHolder.js'
import InventoryType from '../../org/bukkit/event/inventory/InventoryType.js'
import ItemFactory from '../../org/bukkit/inventory/ItemFactory.js'
import ItemStack from '../../org/bukkit/inventory/ItemStack.js'
import KeyedBossBar from '../../org/bukkit/boss/KeyedBossBar.js'
import Location from '../../org/bukkit/Location.js'
import LootTable from '../../org/bukkit/loot/LootTable.js'
import MapView from '../../org/bukkit/map/MapView.js'
import Material from '../../org/bukkit/Material.js'
import Merchant from '../../org/bukkit/inventory/Merchant.js'
import Messenger from '../../org/bukkit/plugin/messaging/Messenger.js'
import NamespacedKey from '../../org/bukkit/NamespacedKey.js'
import OfflinePlayer from '../../org/bukkit/OfflinePlayer.js'
import Player from '../../org/bukkit/entity/Player.js'
import Plugin from '../../org/bukkit/plugin/Plugin.js'
import PluginCommand from '../../org/bukkit/command/PluginCommand.js'
import PluginManager from '../../org/bukkit/plugin/PluginManager.js'
import PluginMessageRecipient from '../../org/bukkit/plugin/messaging/PluginMessageRecipient.js'
import Recipe from '../../org/bukkit/inventory/Recipe.js'
import ScoreboardManager from '../../org/bukkit/scoreboard/ScoreboardManager.js'
import ServicesManager from '../../org/bukkit/plugin/ServicesManager.js'
import StructureType from '../../org/bukkit/StructureType.js'
import Tag from '../../org/bukkit/Tag.js'
import UnsafeValues from '../../org/bukkit/UnsafeValues.js'
import Warning$WarningState from '../../org/bukkit/Warning$WarningState.js'
import World from '../../org/bukkit/World.js'
import WorldCreator from '../../org/bukkit/WorldCreator.js'

export default interface Server extends PluginMessageRecipient {
	getLogger(): any;
	getPluginManager(): PluginManager;
	getMessenger(): Messenger;
	getServicesManager(): ServicesManager;
	getScheduler(): BukkitScheduler;
	getVersion(): string;
	getMaxPlayers(): number;
	getOnlinePlayers(): any;
	getViewDistance(): number;
	getBukkitVersion(): string;
	getIp(): string;
	getWorldType(): string;
	getGenerateStructures(): boolean;
	getAllowEnd(): boolean;
	getAllowNether(): boolean;
	hasWhitelist(): boolean;
	setWhitelist(arg0: boolean): void;
	getWhitelistedPlayers(): any;
	reloadWhitelist(): void;
	broadcastMessage(arg0: string): number;
	getUpdateFolder(): string;
	getUpdateFolderFile(): File;
	getConnectionThrottle(): number;
	getTicksPerAnimalSpawns(): number;
	getTicksPerMonsterSpawns(): number;
	getPlayer(arg0: string): Player;
	getPlayer(arg0: string): Player;
	getPlayerExact(arg0: string): Player;
	matchPlayer(arg0: string): Array<Player>;
	getWorlds(): Array<World>;
	createWorld(arg0: WorldCreator): World;
	unloadWorld(arg0: World, arg1: boolean): boolean;
	unloadWorld(arg0: string, arg1: boolean): boolean;
	getWorld(arg0: string): World;
	getWorld(arg0: string): World;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: number, arg4: boolean): ItemStack;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack;
	reload(): void;
	reloadData(): void;
	getPluginCommand(arg0: string): PluginCommand;
	savePlayers(): void;
	dispatchCommand(arg0: CommandSender, arg1: string): boolean;
	addRecipe(arg0: Recipe): boolean;
	getRecipesFor(arg0: ItemStack): Array<Recipe>;
	recipeIterator(): any;
	clearRecipes(): void;
	resetRecipes(): void;
	removeRecipe(arg0: NamespacedKey): boolean;
	getCommandAliases(): any;
	getSpawnRadius(): number;
	setSpawnRadius(arg0: number): void;
	getOnlineMode(): boolean;
	getAllowFlight(): boolean;
	isHardcore(): boolean;
	broadcast(arg0: string, arg1: string): number;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getIPBans(): any;
	banIP(arg0: string): void;
	unbanIP(arg0: string): void;
	getBannedPlayers(): any;
	getBanList(arg0: BanList$Type): BanList;
	getOperators(): any;
	getDefaultGameMode(): GameMode;
	setDefaultGameMode(arg0: GameMode): void;
	getConsoleSender(): ConsoleCommandSender;
	getWorldContainer(): File;
	getOfflinePlayers(): Array<OfflinePlayer>;
	getHelpMap(): HelpMap;
	createInventory(arg0: InventoryHolder, arg1: number): Inventory;
	createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory;
	createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: string): Inventory;
	createInventory(arg0: InventoryHolder, arg1: number, arg2: string): Inventory;
	createMerchant(arg0: string): Merchant;
	getMonsterSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getWaterAnimalSpawnLimit(): number;
	getAmbientSpawnLimit(): number;
	isPrimaryThread(): boolean;
	getMotd(): string;
	getShutdownMessage(): string;
	getWarningState(): Warning$WarningState;
	getItemFactory(): ItemFactory;
	getScoreboardManager(): ScoreboardManager;
	getServerIcon(): CachedServerIcon;
	loadServerIcon(arg0: File): CachedServerIcon;
	loadServerIcon(arg0: any): CachedServerIcon;
	setIdleTimeout(arg0: number): void;
	getIdleTimeout(): number;
	createChunkData(arg0: World): ChunkGenerator$ChunkData;
	createBossBar(arg0: NamespacedKey, arg1: string, arg2: BarColor, arg3: BarStyle, arg4: Array<BarFlag>): KeyedBossBar;
	createBossBar(arg0: string, arg1: BarColor, arg2: BarStyle, arg3: Array<BarFlag>): BossBar;
	getBossBars(): any;
	getBossBar(arg0: NamespacedKey): KeyedBossBar;
	removeBossBar(arg0: NamespacedKey): boolean;
	getEntity(arg0: string): Entity;
	getAdvancement(arg0: NamespacedKey): Advancement;
	advancementIterator(): any;
	createBlockData(arg0: Material, arg1: any): BlockData;
	createBlockData(arg0: Material): BlockData;
	createBlockData(arg0: string): BlockData;
	createBlockData(arg0: Material, arg1: string): BlockData;
	getTag(arg0: string, arg1: NamespacedKey, arg2: any): Tag;
	getTags(arg0: string, arg1: any): any;
	getLootTable(arg0: NamespacedKey): LootTable;
	selectEntities(arg0: CommandSender, arg1: string): Array<Entity>;
	shutdown(): void;
	getName(): string;
	getUnsafe(): UnsafeValues;
	getPort(): number;
	getMap(arg0: number): MapView;
	createMap(arg0: World): MapView;
	getListeningPluginChannels(): any;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
}

export default class Server {
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

