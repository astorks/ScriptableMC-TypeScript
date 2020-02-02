export default interface GameRule {
    getName(): string;
    getType(): any;
}
export default class GameRule {
    static get $javaClass(): any;
    static get ANNOUNCE_ADVANCEMENTS(): GameRule;
    static get COMMAND_BLOCK_OUTPUT(): GameRule;
    static get DISABLE_ELYTRA_MOVEMENT_CHECK(): GameRule;
    static get DO_DAYLIGHT_CYCLE(): GameRule;
    static get DO_ENTITY_DROPS(): GameRule;
    static get DO_FIRE_TICK(): GameRule;
    static get DO_LIMITED_CRAFTING(): GameRule;
    static get DO_MOB_LOOT(): GameRule;
    static get DO_MOB_SPAWNING(): GameRule;
    static get DO_TILE_DROPS(): GameRule;
    static get DO_WEATHER_CYCLE(): GameRule;
    static get KEEP_INVENTORY(): GameRule;
    static get LOG_ADMIN_COMMANDS(): GameRule;
    static get MOB_GRIEFING(): GameRule;
    static get NATURAL_REGENERATION(): GameRule;
    static get REDUCED_DEBUG_INFO(): GameRule;
    static get SEND_COMMAND_FEEDBACK(): GameRule;
    static get SHOW_DEATH_MESSAGES(): GameRule;
    static get SPECTATORS_GENERATE_CHUNKS(): GameRule;
    static get DISABLE_RAIDS(): GameRule;
    static get DO_INSOMNIA(): GameRule;
    static get DO_IMMEDIATE_RESPAWN(): GameRule;
    static get DROWNING_DAMAGE(): GameRule;
    static get FALL_DAMAGE(): GameRule;
    static get FIRE_DAMAGE(): GameRule;
    static get DO_PATROL_SPAWNING(): GameRule;
    static get DO_TRADER_SPAWNING(): GameRule;
    static get RANDOM_TICK_SPEED(): GameRule;
    static get SPAWN_RADIUS(): GameRule;
    static get MAX_ENTITY_CRAMMING(): GameRule;
    static get MAX_COMMAND_CHAIN_LENGTH(): GameRule;
    static values(): Array<GameRule>;
    static getByName(rule: string): GameRule;
}
