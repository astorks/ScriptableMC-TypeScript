export class Bukkit {
    static get $javaClass() {
        return Java.type('org.bukkit.Bukkit');
    }
    static getLogger(...args) {
        return Bukkit.$javaClass.getLogger(...args);
    }
    static getPluginManager(...args) {
        return Bukkit.$javaClass.getPluginManager(...args);
    }
    static getMessenger(...args) {
        return Bukkit.$javaClass.getMessenger(...args);
    }
    static getServer(...args) {
        return Bukkit.$javaClass.getServer(...args);
    }
    static getOnlinePlayers(...args) {
        return Bukkit.$javaClass.getOnlinePlayers(...args);
    }
    static getWorld(...args) {
        return Bukkit.$javaClass.getWorld(...args);
    }
    static getConsoleSender(...args) {
        return Bukkit.$javaClass.getConsoleSender(...args);
    }
    static getItemFactory(...args) {
        return Bukkit.$javaClass.getItemFactory(...args);
    }
    static getPluginCommand(...args) {
        return Bukkit.$javaClass.getPluginCommand(...args);
    }
    static getAllowEnd(...args) {
        return Bukkit.$javaClass.getAllowEnd(...args);
    }
    static getBukkitVersion(...args) {
        return Bukkit.$javaClass.getBukkitVersion(...args);
    }
    static getVersion(...args) {
        return Bukkit.$javaClass.getVersion(...args);
    }
    static getIp(...args) {
        return Bukkit.$javaClass.getIp(...args);
    }
    static getUpdateFolder(...args) {
        return Bukkit.$javaClass.getUpdateFolder(...args);
    }
    static getUpdateFolderFile(...args) {
        return Bukkit.$javaClass.getUpdateFolderFile(...args);
    }
    static getConnectionThrottle(...args) {
        return Bukkit.$javaClass.getConnectionThrottle(...args);
    }
    static getTicksPerAnimalSpawns(...args) {
        return Bukkit.$javaClass.getTicksPerAnimalSpawns(...args);
    }
    static getTicksPerMonsterSpawns(...args) {
        return Bukkit.$javaClass.getTicksPerMonsterSpawns(...args);
    }
    static getPlayerExact(...args) {
        return Bukkit.$javaClass.getPlayerExact(...args);
    }
    static matchPlayer(...args) {
        return Bukkit.$javaClass.matchPlayer(...args);
    }
    static getScheduler(...args) {
        return Bukkit.$javaClass.getScheduler(...args);
    }
    static getServicesManager(...args) {
        return Bukkit.$javaClass.getServicesManager(...args);
    }
    static getWorlds(...args) {
        return Bukkit.$javaClass.getWorlds(...args);
    }
    static createWorld(...args) {
        return Bukkit.$javaClass.createWorld(...args);
    }
    static unloadWorld(...args) {
        return Bukkit.$javaClass.unloadWorld(...args);
    }
    static createExplorerMap(...args) {
        return Bukkit.$javaClass.createExplorerMap(...args);
    }
    static reload(...args) {
        return Bukkit.$javaClass.reload(...args);
    }
    static reloadData(...args) {
        return Bukkit.$javaClass.reloadData(...args);
    }
    static savePlayers(...args) {
        return Bukkit.$javaClass.savePlayers(...args);
    }
    static getMaxPlayers(...args) {
        return Bukkit.$javaClass.getMaxPlayers(...args);
    }
    static getViewDistance(...args) {
        return Bukkit.$javaClass.getViewDistance(...args);
    }
    static getGenerateStructures(...args) {
        return Bukkit.$javaClass.getGenerateStructures(...args);
    }
    static getAllowNether(...args) {
        return Bukkit.$javaClass.getAllowNether(...args);
    }
    static hasWhitelist(...args) {
        return Bukkit.$javaClass.hasWhitelist(...args);
    }
    static setWhitelist(...args) {
        return Bukkit.$javaClass.setWhitelist(...args);
    }
    static getWhitelistedPlayers(...args) {
        return Bukkit.$javaClass.getWhitelistedPlayers(...args);
    }
    static reloadWhitelist(...args) {
        return Bukkit.$javaClass.reloadWhitelist(...args);
    }
    static broadcastMessage(...args) {
        return Bukkit.$javaClass.broadcastMessage(...args);
    }
    static getAllowFlight(...args) {
        return Bukkit.$javaClass.getAllowFlight(...args);
    }
    static getWorldType(...args) {
        return Bukkit.$javaClass.getWorldType(...args);
    }
    static getPlayer(...args) {
        return Bukkit.$javaClass.getPlayer(...args);
    }
    static dispatchCommand(...args) {
        return Bukkit.$javaClass.dispatchCommand(...args);
    }
    static addRecipe(...args) {
        return Bukkit.$javaClass.addRecipe(...args);
    }
    static getRecipesFor(...args) {
        return Bukkit.$javaClass.getRecipesFor(...args);
    }
    static recipeIterator(...args) {
        return Bukkit.$javaClass.recipeIterator(...args);
    }
    static clearRecipes(...args) {
        return Bukkit.$javaClass.clearRecipes(...args);
    }
    static resetRecipes(...args) {
        return Bukkit.$javaClass.resetRecipes(...args);
    }
    static getCommandAliases(...args) {
        return Bukkit.$javaClass.getCommandAliases(...args);
    }
    static getSpawnRadius(...args) {
        return Bukkit.$javaClass.getSpawnRadius(...args);
    }
    static setSpawnRadius(...args) {
        return Bukkit.$javaClass.setSpawnRadius(...args);
    }
    static getOnlineMode(...args) {
        return Bukkit.$javaClass.getOnlineMode(...args);
    }
    static isHardcore(...args) {
        return Bukkit.$javaClass.isHardcore(...args);
    }
    static broadcast(...args) {
        return Bukkit.$javaClass.broadcast(...args);
    }
    static getOfflinePlayer(...args) {
        return Bukkit.$javaClass.getOfflinePlayer(...args);
    }
    static getIPBans(...args) {
        return Bukkit.$javaClass.getIPBans(...args);
    }
    static banIP(...args) {
        return Bukkit.$javaClass.banIP(...args);
    }
    static unbanIP(...args) {
        return Bukkit.$javaClass.unbanIP(...args);
    }
    static getBannedPlayers(...args) {
        return Bukkit.$javaClass.getBannedPlayers(...args);
    }
    static getBanList(...args) {
        return Bukkit.$javaClass.getBanList(...args);
    }
    static getOperators(...args) {
        return Bukkit.$javaClass.getOperators(...args);
    }
    static getDefaultGameMode(...args) {
        return Bukkit.$javaClass.getDefaultGameMode(...args);
    }
    static setDefaultGameMode(...args) {
        return Bukkit.$javaClass.setDefaultGameMode(...args);
    }
    static getWorldContainer(...args) {
        return Bukkit.$javaClass.getWorldContainer(...args);
    }
    static getOfflinePlayers(...args) {
        return Bukkit.$javaClass.getOfflinePlayers(...args);
    }
    static getHelpMap(...args) {
        return Bukkit.$javaClass.getHelpMap(...args);
    }
    static createInventory(...args) {
        return Bukkit.$javaClass.createInventory(...args);
    }
    static createMerchant(...args) {
        return Bukkit.$javaClass.createMerchant(...args);
    }
    static getMonsterSpawnLimit(...args) {
        return Bukkit.$javaClass.getMonsterSpawnLimit(...args);
    }
    static getAnimalSpawnLimit(...args) {
        return Bukkit.$javaClass.getAnimalSpawnLimit(...args);
    }
    static getWaterAnimalSpawnLimit(...args) {
        return Bukkit.$javaClass.getWaterAnimalSpawnLimit(...args);
    }
    static getAmbientSpawnLimit(...args) {
        return Bukkit.$javaClass.getAmbientSpawnLimit(...args);
    }
    static isPrimaryThread(...args) {
        return Bukkit.$javaClass.isPrimaryThread(...args);
    }
    static getMotd(...args) {
        return Bukkit.$javaClass.getMotd(...args);
    }
    static getShutdownMessage(...args) {
        return Bukkit.$javaClass.getShutdownMessage(...args);
    }
    static getWarningState(...args) {
        return Bukkit.$javaClass.getWarningState(...args);
    }
    static getScoreboardManager(...args) {
        return Bukkit.$javaClass.getScoreboardManager(...args);
    }
    static getServerIcon(...args) {
        return Bukkit.$javaClass.getServerIcon(...args);
    }
    static loadServerIcon(...args) {
        return Bukkit.$javaClass.loadServerIcon(...args);
    }
    static setIdleTimeout(...args) {
        return Bukkit.$javaClass.setIdleTimeout(...args);
    }
    static getIdleTimeout(...args) {
        return Bukkit.$javaClass.getIdleTimeout(...args);
    }
    static createChunkData(...args) {
        return Bukkit.$javaClass.createChunkData(...args);
    }
    static createBossBar(...args) {
        return Bukkit.$javaClass.createBossBar(...args);
    }
    static getBossBars(...args) {
        return Bukkit.$javaClass.getBossBars(...args);
    }
    static getBossBar(...args) {
        return Bukkit.$javaClass.getBossBar(...args);
    }
    static removeBossBar(...args) {
        return Bukkit.$javaClass.removeBossBar(...args);
    }
    static getEntity(...args) {
        return Bukkit.$javaClass.getEntity(...args);
    }
    static getAdvancement(...args) {
        return Bukkit.$javaClass.getAdvancement(...args);
    }
    static advancementIterator(...args) {
        return Bukkit.$javaClass.advancementIterator(...args);
    }
    static createBlockData(...args) {
        return Bukkit.$javaClass.createBlockData(...args);
    }
    static getTag(...args) {
        return Bukkit.$javaClass.getTag(...args);
    }
    static getTags(...args) {
        return Bukkit.$javaClass.getTags(...args);
    }
    static getLootTable(...args) {
        return Bukkit.$javaClass.getLootTable(...args);
    }
    static selectEntities(...args) {
        return Bukkit.$javaClass.selectEntities(...args);
    }
    static setServer(...args) {
        return Bukkit.$javaClass.setServer(...args);
    }
    static shutdown(...args) {
        return Bukkit.$javaClass.shutdown(...args);
    }
    static getName(...args) {
        return Bukkit.$javaClass.getName(...args);
    }
    static getUnsafe(...args) {
        return Bukkit.$javaClass.getUnsafe(...args);
    }
    static getPort(...args) {
        return Bukkit.$javaClass.getPort(...args);
    }
    static getMap(...args) {
        return Bukkit.$javaClass.getMap(...args);
    }
    static createMap(...args) {
        return Bukkit.$javaClass.createMap(...args);
    }
}
//# sourceMappingURL=Bukkit.js.map