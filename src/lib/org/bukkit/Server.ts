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
	addRecipe(arg0: Recipe): boolean;
	advancementIterator(): any;
	banIP(arg0: string): void;
	broadcast(arg0: string, arg1: string): number;
	broadcastMessage(arg0: string): number;
	clearRecipes(): void;
	createBlockData(arg0: Material): BlockData;
	createBlockData(arg0: string): BlockData;
	createBlockData(arg0: Material, arg1: string): BlockData;
	createBlockData(arg0: Material, arg1: any): BlockData;
	createBossBar(arg0: string, arg1: BarColor, arg2: BarStyle, arg3: Array<BarFlag>): BossBar;
	createBossBar(arg0: NamespacedKey, arg1: string, arg2: BarColor, arg3: BarStyle, arg4: Array<BarFlag>): KeyedBossBar;
	createChunkData(arg0: World): ChunkGenerator$ChunkData;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack;
	createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: number, arg4: boolean): ItemStack;
	createInventory(arg0: InventoryHolder, arg1: number): Inventory;
	createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory;
	createInventory(arg0: InventoryHolder, arg1: number, arg2: string): Inventory;
	createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: string): Inventory;
	createMap(arg0: World): MapView;
	createMerchant(arg0: string): Merchant;
	createWorld(arg0: WorldCreator): World;
	dispatchCommand(arg0: CommandSender, arg1: string): boolean;
	getAdvancement(arg0: NamespacedKey): Advancement;
	getAllowEnd(): boolean;
	getAllowFlight(): boolean;
	getAllowNether(): boolean;
	getAmbientSpawnLimit(): number;
	getAnimalSpawnLimit(): number;
	getBanList(arg0: BanList$Type): BanList;
	getBannedPlayers(): any;
	getBossBar(arg0: NamespacedKey): KeyedBossBar;
	getBossBars(): any;
	getBukkitVersion(): string;
	getCommandAliases(): any;
	getConnectionThrottle(): number;
	getConsoleSender(): ConsoleCommandSender;
	getDefaultGameMode(): GameMode;
	getEntity(arg0: string): Entity;
	getGenerateStructures(): boolean;
	getHelpMap(): HelpMap;
	getIPBans(): any;
	getIdleTimeout(): number;
	getIp(): string;
	getItemFactory(): ItemFactory;
	getListeningPluginChannels(): any;
	getLogger(): any;
	getLootTable(arg0: NamespacedKey): LootTable;
	getMap(arg0: number): MapView;
	getMaxPlayers(): number;
	getMessenger(): Messenger;
	getMonsterSpawnLimit(): number;
	getMotd(): string;
	getName(): string;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayer(arg0: string): OfflinePlayer;
	getOfflinePlayers(): Array<OfflinePlayer>;
	getOnlineMode(): boolean;
	getOnlinePlayers(): any;
	getOperators(): any;
	getPlayer(arg0: string): Player;
	getPlayer(arg0: string): Player;
	getPlayerExact(arg0: string): Player;
	getPluginCommand(arg0: string): PluginCommand;
	getPluginManager(): PluginManager;
	getPort(): number;
	getRecipesFor(arg0: ItemStack): Array<Recipe>;
	getScheduler(): BukkitScheduler;
	getScoreboardManager(): ScoreboardManager;
	getServerIcon(): CachedServerIcon;
	getServicesManager(): ServicesManager;
	getShutdownMessage(): string;
	getSpawnRadius(): number;
	getTag(arg0: string, arg1: NamespacedKey, arg2: any): Tag;
	getTags(arg0: string, arg1: any): any;
	getTicksPerAnimalSpawns(): number;
	getTicksPerMonsterSpawns(): number;
	getUnsafe(): UnsafeValues;
	getUpdateFolder(): string;
	getUpdateFolderFile(): File;
	getVersion(): string;
	getViewDistance(): number;
	getWarningState(): Warning$WarningState;
	getWaterAnimalSpawnLimit(): number;
	getWhitelistedPlayers(): any;
	getWorld(arg0: string): World;
	getWorld(arg0: string): World;
	getWorldContainer(): File;
	getWorldType(): string;
	getWorlds(): Array<World>;
	hasWhitelist(): boolean;
	isHardcore(): boolean;
	isPrimaryThread(): boolean;
	loadServerIcon(arg0: File): CachedServerIcon;
	loadServerIcon(arg0: any): CachedServerIcon;
	matchPlayer(arg0: string): Array<Player>;
	recipeIterator(): any;
	reload(): void;
	reloadData(): void;
	reloadWhitelist(): void;
	removeBossBar(arg0: NamespacedKey): boolean;
	removeRecipe(arg0: NamespacedKey): boolean;
	resetRecipes(): void;
	savePlayers(): void;
	selectEntities(arg0: CommandSender, arg1: string): Array<Entity>;
	sendPluginMessage(arg0: Plugin, arg1: string, arg2: Array<number>): void;
	setDefaultGameMode(arg0: GameMode): void;
	setIdleTimeout(arg0: number): void;
	setSpawnRadius(arg0: number): void;
	setWhitelist(arg0: boolean): void;
	shutdown(): void;
	unbanIP(arg0: string): void;
	unloadWorld(arg0: World, arg1: boolean): boolean;
	unloadWorld(arg0: string, arg1: boolean): boolean;
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

