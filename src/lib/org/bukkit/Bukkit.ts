declare var Java: any;
import Advancement from './advancement/Advancement.js'
import BanList from './BanList.js'
import BanList$Type from './BanList$Type.js'
import BarColor from './boss/BarColor.js'
import BarFlag from './boss/BarFlag.js'
import BarStyle from './boss/BarStyle.js'
import BlockData from './block/data/BlockData.js'
import BossBar from './boss/BossBar.js'
import BukkitScheduler from './scheduler/BukkitScheduler.js'
import CachedServerIcon from './util/CachedServerIcon.js'
import ChunkGenerator$ChunkData from './generator/ChunkGenerator$ChunkData.js'
import CommandSender from './command/CommandSender.js'
import ConsoleCommandSender from './command/ConsoleCommandSender.js'
import Entity from './entity/Entity.js'
import File from '../../java/io/File.js'
import GameMode from './GameMode.js'
import HelpMap from './help/HelpMap.js'
import Inventory from './inventory/Inventory.js'
import InventoryHolder from './inventory/InventoryHolder.js'
import InventoryType from './event/inventory/InventoryType.js'
import ItemFactory from './inventory/ItemFactory.js'
import ItemStack from './inventory/ItemStack.js'
import KeyedBossBar from './boss/KeyedBossBar.js'
import Location from './Location.js'
import LootTable from './loot/LootTable.js'
import MapView from './map/MapView.js'
import Material from './Material.js'
import Merchant from './inventory/Merchant.js'
import Messenger from './plugin/messaging/Messenger.js'
import NamespacedKey from './NamespacedKey.js'
import OfflinePlayer from './OfflinePlayer.js'
import Player from './entity/Player.js'
import PluginCommand from './command/PluginCommand.js'
import PluginManager from './plugin/PluginManager.js'
import Recipe from './inventory/Recipe.js'
import ScoreboardManager from './scoreboard/ScoreboardManager.js'
import Server from './Server.js'
import Server$Spigot from './Server$Spigot.js'
import ServicesManager from './plugin/ServicesManager.js'
import StructureType from './StructureType.js'
import Tag from './Tag.js'
import UnsafeValues from './UnsafeValues.js'
import Warning$WarningState from './Warning$WarningState.js'
import World from './World.js'
import WorldCreator from './WorldCreator.js'

export default class Bukkit {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Bukkit');
	}

	public static addRecipe(recipe: Recipe): boolean;
	public static addRecipe(...args: any[]): any {
		return Bukkit.$javaClass.addRecipe(...args);
	}

	public static advancementIterator(): any;
	public static advancementIterator(...args: any[]): any {
		return Bukkit.$javaClass.advancementIterator(...args);
	}

	public static banIP(address: string): void;
	public static banIP(...args: any[]): any {
		return Bukkit.$javaClass.banIP(...args);
	}

	public static broadcast(message: string, permission: string): number;
	public static broadcast(...args: any[]): any {
		return Bukkit.$javaClass.broadcast(...args);
	}

	public static broadcastMessage(message: string): number;
	public static broadcastMessage(...args: any[]): any {
		return Bukkit.$javaClass.broadcastMessage(...args);
	}

	public static clearRecipes(): void;
	public static clearRecipes(...args: any[]): any {
		return Bukkit.$javaClass.clearRecipes(...args);
	}

	public static createBlockData(data: string): BlockData;
	public static createBlockData(material: Material): BlockData;
	public static createBlockData(material: Material, data: string): BlockData;
	public static createBlockData(material: Material, consumer: any): BlockData;
	public static createBlockData(...args: any[]): any {
		return Bukkit.$javaClass.createBlockData(...args);
	}

	public static createBossBar(title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): BossBar;
	public static createBossBar(key: NamespacedKey, title: string, color: BarColor, style: BarStyle, flags: Array<BarFlag>): KeyedBossBar;
	public static createBossBar(...args: any[]): any {
		return Bukkit.$javaClass.createBossBar(...args);
	}

	public static createChunkData(world: World): ChunkGenerator$ChunkData;
	public static createChunkData(...args: any[]): any {
		return Bukkit.$javaClass.createChunkData(...args);
	}

	public static createExplorerMap(world: World, location: Location, structureType: StructureType): ItemStack;
	public static createExplorerMap(world: World, location: Location, structureType: StructureType, radius: number, findUnexplored: boolean): ItemStack;
	public static createExplorerMap(...args: any[]): any {
		return Bukkit.$javaClass.createExplorerMap(...args);
	}

	public static createInventory(owner: InventoryHolder, type: InventoryType): Inventory;
	public static createInventory(owner: InventoryHolder, size: number): Inventory;
	public static createInventory(owner: InventoryHolder, type: InventoryType, title: string): Inventory;
	public static createInventory(owner: InventoryHolder, size: number, title: string): Inventory;
	public static createInventory(...args: any[]): any {
		return Bukkit.$javaClass.createInventory(...args);
	}

	public static createMap(world: World): MapView;
	public static createMap(...args: any[]): any {
		return Bukkit.$javaClass.createMap(...args);
	}

	public static createMerchant(title: string): Merchant;
	public static createMerchant(...args: any[]): any {
		return Bukkit.$javaClass.createMerchant(...args);
	}

	public static createWorld(creator: WorldCreator): World;
	public static createWorld(...args: any[]): any {
		return Bukkit.$javaClass.createWorld(...args);
	}

	public static dispatchCommand(sender: CommandSender, commandLine: string): boolean;
	public static dispatchCommand(...args: any[]): any {
		return Bukkit.$javaClass.dispatchCommand(...args);
	}

	public static getAdvancement(key: NamespacedKey): Advancement;
	public static getAdvancement(...args: any[]): any {
		return Bukkit.$javaClass.getAdvancement(...args);
	}

	public static getAllowEnd(): boolean;
	public static getAllowEnd(...args: any[]): any {
		return Bukkit.$javaClass.getAllowEnd(...args);
	}

	public static getAllowFlight(): boolean;
	public static getAllowFlight(...args: any[]): any {
		return Bukkit.$javaClass.getAllowFlight(...args);
	}

	public static getAllowNether(): boolean;
	public static getAllowNether(...args: any[]): any {
		return Bukkit.$javaClass.getAllowNether(...args);
	}

	public static getAmbientSpawnLimit(): number;
	public static getAmbientSpawnLimit(...args: any[]): any {
		return Bukkit.$javaClass.getAmbientSpawnLimit(...args);
	}

	public static getAnimalSpawnLimit(): number;
	public static getAnimalSpawnLimit(...args: any[]): any {
		return Bukkit.$javaClass.getAnimalSpawnLimit(...args);
	}

	public static getBanList(type: BanList$Type): BanList;
	public static getBanList(...args: any[]): any {
		return Bukkit.$javaClass.getBanList(...args);
	}

	public static getBannedPlayers(): any;
	public static getBannedPlayers(...args: any[]): any {
		return Bukkit.$javaClass.getBannedPlayers(...args);
	}

	public static getBossBar(key: NamespacedKey): KeyedBossBar;
	public static getBossBar(...args: any[]): any {
		return Bukkit.$javaClass.getBossBar(...args);
	}

	public static getBossBars(): any;
	public static getBossBars(...args: any[]): any {
		return Bukkit.$javaClass.getBossBars(...args);
	}

	public static getBukkitVersion(): string;
	public static getBukkitVersion(...args: any[]): any {
		return Bukkit.$javaClass.getBukkitVersion(...args);
	}

	public static getCommandAliases(): any;
	public static getCommandAliases(...args: any[]): any {
		return Bukkit.$javaClass.getCommandAliases(...args);
	}

	public static getConnectionThrottle(): number;
	public static getConnectionThrottle(...args: any[]): any {
		return Bukkit.$javaClass.getConnectionThrottle(...args);
	}

	public static getConsoleSender(): ConsoleCommandSender;
	public static getConsoleSender(...args: any[]): any {
		return Bukkit.$javaClass.getConsoleSender(...args);
	}

	public static getDefaultGameMode(): GameMode;
	public static getDefaultGameMode(...args: any[]): any {
		return Bukkit.$javaClass.getDefaultGameMode(...args);
	}

	public static getEntity(uuid: string): Entity;
	public static getEntity(...args: any[]): any {
		return Bukkit.$javaClass.getEntity(...args);
	}

	public static getGenerateStructures(): boolean;
	public static getGenerateStructures(...args: any[]): any {
		return Bukkit.$javaClass.getGenerateStructures(...args);
	}

	public static getHelpMap(): HelpMap;
	public static getHelpMap(...args: any[]): any {
		return Bukkit.$javaClass.getHelpMap(...args);
	}

	public static getIPBans(): any;
	public static getIPBans(...args: any[]): any {
		return Bukkit.$javaClass.getIPBans(...args);
	}

	public static getIdleTimeout(): number;
	public static getIdleTimeout(...args: any[]): any {
		return Bukkit.$javaClass.getIdleTimeout(...args);
	}

	public static getIp(): string;
	public static getIp(...args: any[]): any {
		return Bukkit.$javaClass.getIp(...args);
	}

	public static getItemFactory(): ItemFactory;
	public static getItemFactory(...args: any[]): any {
		return Bukkit.$javaClass.getItemFactory(...args);
	}

	public static getLogger(): any;
	public static getLogger(...args: any[]): any {
		return Bukkit.$javaClass.getLogger(...args);
	}

	public static getLootTable(key: NamespacedKey): LootTable;
	public static getLootTable(...args: any[]): any {
		return Bukkit.$javaClass.getLootTable(...args);
	}

	public static getMap(id: number): MapView;
	public static getMap(...args: any[]): any {
		return Bukkit.$javaClass.getMap(...args);
	}

	public static getMaxPlayers(): number;
	public static getMaxPlayers(...args: any[]): any {
		return Bukkit.$javaClass.getMaxPlayers(...args);
	}

	public static getMessenger(): Messenger;
	public static getMessenger(...args: any[]): any {
		return Bukkit.$javaClass.getMessenger(...args);
	}

	public static getMonsterSpawnLimit(): number;
	public static getMonsterSpawnLimit(...args: any[]): any {
		return Bukkit.$javaClass.getMonsterSpawnLimit(...args);
	}

	public static getMotd(): string;
	public static getMotd(...args: any[]): any {
		return Bukkit.$javaClass.getMotd(...args);
	}

	public static getName(): string;
	public static getName(...args: any[]): any {
		return Bukkit.$javaClass.getName(...args);
	}

	public static getOfflinePlayer(id: string): OfflinePlayer;
	public static getOfflinePlayer(_name: string): OfflinePlayer;
	public static getOfflinePlayer(...args: any[]): any {
		return Bukkit.$javaClass.getOfflinePlayer(...args);
	}

	public static getOfflinePlayers(): Array<OfflinePlayer>;
	public static getOfflinePlayers(...args: any[]): any {
		return Bukkit.$javaClass.getOfflinePlayers(...args);
	}

	public static getOnlineMode(): boolean;
	public static getOnlineMode(...args: any[]): any {
		return Bukkit.$javaClass.getOnlineMode(...args);
	}

	public static getOnlinePlayers(): Array<Player>;
	public static getOnlinePlayers(...args: any[]): any {
		return Bukkit.$javaClass.getOnlinePlayers(...args);
	}

	public static getOperators(): any;
	public static getOperators(...args: any[]): any {
		return Bukkit.$javaClass.getOperators(...args);
	}

	public static getPlayer(_name: string): Player;
	public static getPlayer(id: string): Player;
	public static getPlayer(...args: any[]): any {
		return Bukkit.$javaClass.getPlayer(...args);
	}

	public static getPlayerExact(_name: string): Player;
	public static getPlayerExact(...args: any[]): any {
		return Bukkit.$javaClass.getPlayerExact(...args);
	}

	public static getPluginCommand(_name: string): PluginCommand;
	public static getPluginCommand(...args: any[]): any {
		return Bukkit.$javaClass.getPluginCommand(...args);
	}

	public static getPluginManager(): PluginManager;
	public static getPluginManager(...args: any[]): any {
		return Bukkit.$javaClass.getPluginManager(...args);
	}

	public static getPort(): number;
	public static getPort(...args: any[]): any {
		return Bukkit.$javaClass.getPort(...args);
	}

	public static getRecipesFor(result: ItemStack): Array<Recipe>;
	public static getRecipesFor(...args: any[]): any {
		return Bukkit.$javaClass.getRecipesFor(...args);
	}

	public static getScheduler(): BukkitScheduler;
	public static getScheduler(...args: any[]): any {
		return Bukkit.$javaClass.getScheduler(...args);
	}

	public static getScoreboardManager(): ScoreboardManager;
	public static getScoreboardManager(...args: any[]): any {
		return Bukkit.$javaClass.getScoreboardManager(...args);
	}

	public static getServer(): Server;
	public static getServer(...args: any[]): any {
		return Bukkit.$javaClass.getServer(...args);
	}

	public static getServerIcon(): CachedServerIcon;
	public static getServerIcon(...args: any[]): any {
		return Bukkit.$javaClass.getServerIcon(...args);
	}

	public static getServicesManager(): ServicesManager;
	public static getServicesManager(...args: any[]): any {
		return Bukkit.$javaClass.getServicesManager(...args);
	}

	public static getShutdownMessage(): string;
	public static getShutdownMessage(...args: any[]): any {
		return Bukkit.$javaClass.getShutdownMessage(...args);
	}

	public static getSpawnRadius(): number;
	public static getSpawnRadius(...args: any[]): any {
		return Bukkit.$javaClass.getSpawnRadius(...args);
	}

	public static getTag(registry: string, tag: NamespacedKey, clazz: any): Tag;
	public static getTag(...args: any[]): any {
		return Bukkit.$javaClass.getTag(...args);
	}

	public static getTags(registry: string, clazz: any): any;
	public static getTags(...args: any[]): any {
		return Bukkit.$javaClass.getTags(...args);
	}

	public static getTicksPerAmbientSpawns(): number;
	public static getTicksPerAmbientSpawns(...args: any[]): any {
		return Bukkit.$javaClass.getTicksPerAmbientSpawns(...args);
	}

	public static getTicksPerAnimalSpawns(): number;
	public static getTicksPerAnimalSpawns(...args: any[]): any {
		return Bukkit.$javaClass.getTicksPerAnimalSpawns(...args);
	}

	public static getTicksPerMonsterSpawns(): number;
	public static getTicksPerMonsterSpawns(...args: any[]): any {
		return Bukkit.$javaClass.getTicksPerMonsterSpawns(...args);
	}

	public static getTicksPerWaterAmbientSpawns(): number;
	public static getTicksPerWaterAmbientSpawns(...args: any[]): any {
		return Bukkit.$javaClass.getTicksPerWaterAmbientSpawns(...args);
	}

	public static getTicksPerWaterSpawns(): number;
	public static getTicksPerWaterSpawns(...args: any[]): any {
		return Bukkit.$javaClass.getTicksPerWaterSpawns(...args);
	}

	public static getUnsafe(): UnsafeValues;
	public static getUnsafe(...args: any[]): any {
		return Bukkit.$javaClass.getUnsafe(...args);
	}

	public static getUpdateFolder(): string;
	public static getUpdateFolder(...args: any[]): any {
		return Bukkit.$javaClass.getUpdateFolder(...args);
	}

	public static getUpdateFolderFile(): File;
	public static getUpdateFolderFile(...args: any[]): any {
		return Bukkit.$javaClass.getUpdateFolderFile(...args);
	}

	public static getVersion(): string;
	public static getVersion(...args: any[]): any {
		return Bukkit.$javaClass.getVersion(...args);
	}

	public static getViewDistance(): number;
	public static getViewDistance(...args: any[]): any {
		return Bukkit.$javaClass.getViewDistance(...args);
	}

	public static getWarningState(): Warning$WarningState;
	public static getWarningState(...args: any[]): any {
		return Bukkit.$javaClass.getWarningState(...args);
	}

	public static getWaterAmbientSpawnLimit(): number;
	public static getWaterAmbientSpawnLimit(...args: any[]): any {
		return Bukkit.$javaClass.getWaterAmbientSpawnLimit(...args);
	}

	public static getWaterAnimalSpawnLimit(): number;
	public static getWaterAnimalSpawnLimit(...args: any[]): any {
		return Bukkit.$javaClass.getWaterAnimalSpawnLimit(...args);
	}

	public static getWhitelistedPlayers(): any;
	public static getWhitelistedPlayers(...args: any[]): any {
		return Bukkit.$javaClass.getWhitelistedPlayers(...args);
	}

	public static getWorld(uid: string): World;
	public static getWorld(_name: string): World;
	public static getWorld(...args: any[]): any {
		return Bukkit.$javaClass.getWorld(...args);
	}

	public static getWorldContainer(): File;
	public static getWorldContainer(...args: any[]): any {
		return Bukkit.$javaClass.getWorldContainer(...args);
	}

	public static getWorldType(): string;
	public static getWorldType(...args: any[]): any {
		return Bukkit.$javaClass.getWorldType(...args);
	}

	public static getWorlds(): Array<World>;
	public static getWorlds(...args: any[]): any {
		return Bukkit.$javaClass.getWorlds(...args);
	}

	public static hasWhitelist(): boolean;
	public static hasWhitelist(...args: any[]): any {
		return Bukkit.$javaClass.hasWhitelist(...args);
	}

	public static isHardcore(): boolean;
	public static isHardcore(...args: any[]): any {
		return Bukkit.$javaClass.isHardcore(...args);
	}

	public static isPrimaryThread(): boolean;
	public static isPrimaryThread(...args: any[]): any {
		return Bukkit.$javaClass.isPrimaryThread(...args);
	}

	public static loadServerIcon(image: any): CachedServerIcon;
	public static loadServerIcon(file: File): CachedServerIcon;
	public static loadServerIcon(...args: any[]): any {
		return Bukkit.$javaClass.loadServerIcon(...args);
	}

	public static matchPlayer(_name: string): Array<Player>;
	public static matchPlayer(...args: any[]): any {
		return Bukkit.$javaClass.matchPlayer(...args);
	}

	public static recipeIterator(): any;
	public static recipeIterator(...args: any[]): any {
		return Bukkit.$javaClass.recipeIterator(...args);
	}

	public static reload(): void;
	public static reload(...args: any[]): any {
		return Bukkit.$javaClass.reload(...args);
	}

	public static reloadData(): void;
	public static reloadData(...args: any[]): any {
		return Bukkit.$javaClass.reloadData(...args);
	}

	public static reloadWhitelist(): void;
	public static reloadWhitelist(...args: any[]): any {
		return Bukkit.$javaClass.reloadWhitelist(...args);
	}

	public static removeBossBar(key: NamespacedKey): boolean;
	public static removeBossBar(...args: any[]): any {
		return Bukkit.$javaClass.removeBossBar(...args);
	}

	public static removeRecipe(key: NamespacedKey): boolean;
	public static removeRecipe(...args: any[]): any {
		return Bukkit.$javaClass.removeRecipe(...args);
	}

	public static resetRecipes(): void;
	public static resetRecipes(...args: any[]): any {
		return Bukkit.$javaClass.resetRecipes(...args);
	}

	public static savePlayers(): void;
	public static savePlayers(...args: any[]): any {
		return Bukkit.$javaClass.savePlayers(...args);
	}

	public static selectEntities(sender: CommandSender, selector: string): Array<Entity>;
	public static selectEntities(...args: any[]): any {
		return Bukkit.$javaClass.selectEntities(...args);
	}

	public static setDefaultGameMode(mode: GameMode): void;
	public static setDefaultGameMode(...args: any[]): any {
		return Bukkit.$javaClass.setDefaultGameMode(...args);
	}

	public static setIdleTimeout(threshold: number): void;
	public static setIdleTimeout(...args: any[]): any {
		return Bukkit.$javaClass.setIdleTimeout(...args);
	}

	public static setServer(server: Server): void;
	public static setServer(...args: any[]): any {
		return Bukkit.$javaClass.setServer(...args);
	}

	public static setSpawnRadius(value: number): void;
	public static setSpawnRadius(...args: any[]): any {
		return Bukkit.$javaClass.setSpawnRadius(...args);
	}

	public static setWhitelist(value: boolean): void;
	public static setWhitelist(...args: any[]): any {
		return Bukkit.$javaClass.setWhitelist(...args);
	}

	public static shutdown(): void;
	public static shutdown(...args: any[]): any {
		return Bukkit.$javaClass.shutdown(...args);
	}

	public static spigot(): Server$Spigot;
	public static spigot(...args: any[]): any {
		return Bukkit.$javaClass.spigot(...args);
	}

	public static unbanIP(address: string): void;
	public static unbanIP(...args: any[]): any {
		return Bukkit.$javaClass.unbanIP(...args);
	}

	public static unloadWorld(world: World, save: boolean): boolean;
	public static unloadWorld(_name: string, save: boolean): boolean;
	public static unloadWorld(...args: any[]): any {
		return Bukkit.$javaClass.unloadWorld(...args);
	}

}

