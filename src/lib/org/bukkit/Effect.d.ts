import Effect$Type from '../../org/bukkit/Effect$Type.js';
export default interface Effect {
    getData(): any;
    getId(): number;
    getType(): Effect$Type;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Effect {
    static get $javaClass(): any;
    static get CLICK2(): Effect;
    static get CLICK1(): Effect;
    static get BOW_FIRE(): Effect;
    static get DOOR_TOGGLE(): Effect;
    static get IRON_DOOR_TOGGLE(): Effect;
    static get TRAPDOOR_TOGGLE(): Effect;
    static get IRON_TRAPDOOR_TOGGLE(): Effect;
    static get FENCE_GATE_TOGGLE(): Effect;
    static get DOOR_CLOSE(): Effect;
    static get IRON_DOOR_CLOSE(): Effect;
    static get TRAPDOOR_CLOSE(): Effect;
    static get IRON_TRAPDOOR_CLOSE(): Effect;
    static get FENCE_GATE_CLOSE(): Effect;
    static get EXTINGUISH(): Effect;
    static get RECORD_PLAY(): Effect;
    static get GHAST_SHRIEK(): Effect;
    static get GHAST_SHOOT(): Effect;
    static get BLAZE_SHOOT(): Effect;
    static get ZOMBIE_CHEW_WOODEN_DOOR(): Effect;
    static get ZOMBIE_CHEW_IRON_DOOR(): Effect;
    static get ZOMBIE_DESTROY_DOOR(): Effect;
    static get SMOKE(): Effect;
    static get STEP_SOUND(): Effect;
    static get POTION_BREAK(): Effect;
    static get ENDER_SIGNAL(): Effect;
    static get MOBSPAWNER_FLAMES(): Effect;
    static get BREWING_STAND_BREW(): Effect;
    static get CHORUS_FLOWER_GROW(): Effect;
    static get CHORUS_FLOWER_DEATH(): Effect;
    static get PORTAL_TRAVEL(): Effect;
    static get ENDEREYE_LAUNCH(): Effect;
    static get FIREWORK_SHOOT(): Effect;
    static get VILLAGER_PLANT_GROW(): Effect;
    static get DRAGON_BREATH(): Effect;
    static get ANVIL_BREAK(): Effect;
    static get ANVIL_USE(): Effect;
    static get ANVIL_LAND(): Effect;
    static get ENDERDRAGON_SHOOT(): Effect;
    static get WITHER_BREAK_BLOCK(): Effect;
    static get WITHER_SHOOT(): Effect;
    static get ZOMBIE_INFECT(): Effect;
    static get ZOMBIE_CONVERTED_VILLAGER(): Effect;
    static get BAT_TAKEOFF(): Effect;
    static get END_GATEWAY_SPAWN(): Effect;
    static get ENDERDRAGON_GROWL(): Effect;
}
