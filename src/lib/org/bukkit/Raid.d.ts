import { Raid$RaidStatus } from '../../org/bukkit/Raid$RaidStatus.js';
import { Location } from '../../org/bukkit/Location.js';
export interface Raid {
    isStarted(): boolean;
    getActiveTicks(): number;
    getBadOmenLevel(): number;
    setBadOmenLevel(arg0: number): void;
    getStatus(): Raid$RaidStatus;
    getSpawnedGroups(): number;
    getTotalGroups(): number;
    getTotalWaves(): number;
    getTotalHealth(): number;
    getHeroes(): any;
    getRaiders(): any;
    getLocation(): Location;
}
export declare class Raid {
    static get $javaClass(): any;
}
