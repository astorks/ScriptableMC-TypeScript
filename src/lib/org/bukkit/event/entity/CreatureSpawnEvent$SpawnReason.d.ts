export interface CreatureSpawnEvent$SpawnReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class CreatureSpawnEvent$SpawnReason {
    static get $javaClass(): any;
    static get NATURAL(): CreatureSpawnEvent$SpawnReason;
    static get JOCKEY(): CreatureSpawnEvent$SpawnReason;
    static get CHUNK_GEN(): CreatureSpawnEvent$SpawnReason;
    static get SPAWNER(): CreatureSpawnEvent$SpawnReason;
    static get EGG(): CreatureSpawnEvent$SpawnReason;
    static get SPAWNER_EGG(): CreatureSpawnEvent$SpawnReason;
    static get LIGHTNING(): CreatureSpawnEvent$SpawnReason;
    static get BUILD_SNOWMAN(): CreatureSpawnEvent$SpawnReason;
    static get BUILD_IRONGOLEM(): CreatureSpawnEvent$SpawnReason;
    static get BUILD_WITHER(): CreatureSpawnEvent$SpawnReason;
    static get VILLAGE_DEFENSE(): CreatureSpawnEvent$SpawnReason;
    static get VILLAGE_INVASION(): CreatureSpawnEvent$SpawnReason;
    static get BREEDING(): CreatureSpawnEvent$SpawnReason;
    static get SLIME_SPLIT(): CreatureSpawnEvent$SpawnReason;
    static get REINFORCEMENTS(): CreatureSpawnEvent$SpawnReason;
    static get NETHER_PORTAL(): CreatureSpawnEvent$SpawnReason;
    static get DISPENSE_EGG(): CreatureSpawnEvent$SpawnReason;
    static get INFECTION(): CreatureSpawnEvent$SpawnReason;
    static get CURED(): CreatureSpawnEvent$SpawnReason;
    static get OCELOT_BABY(): CreatureSpawnEvent$SpawnReason;
    static get SILVERFISH_BLOCK(): CreatureSpawnEvent$SpawnReason;
    static get MOUNT(): CreatureSpawnEvent$SpawnReason;
    static get TRAP(): CreatureSpawnEvent$SpawnReason;
    static get ENDER_PEARL(): CreatureSpawnEvent$SpawnReason;
    static get SHOULDER_ENTITY(): CreatureSpawnEvent$SpawnReason;
    static get DROWNED(): CreatureSpawnEvent$SpawnReason;
    static get SHEARED(): CreatureSpawnEvent$SpawnReason;
    static get EXPLOSION(): CreatureSpawnEvent$SpawnReason;
    static get RAID(): CreatureSpawnEvent$SpawnReason;
    static get PATROL(): CreatureSpawnEvent$SpawnReason;
    static get BEEHIVE(): CreatureSpawnEvent$SpawnReason;
    static get CUSTOM(): CreatureSpawnEvent$SpawnReason;
    static get DEFAULT(): CreatureSpawnEvent$SpawnReason;
}
