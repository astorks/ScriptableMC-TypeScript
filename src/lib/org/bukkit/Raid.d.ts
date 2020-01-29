import { Location } from '../../org/bukkit/Location.js';
import { Raid$RaidStatus } from '../../org/bukkit/Raid$RaidStatus.js';
export interface Raid {
    getLocation(): Location;
    isStarted(): boolean;
    getHeroes(): any;
    getTotalGroups(): number;
    getTotalWaves(): number;
    getActiveTicks(): number;
    getRaiders(): any;
    getSpawnedGroups(): number;
    setBadOmenLevel(arg0: number): void;
    getStatus(): Raid$RaidStatus;
    getTotalHealth(): number;
    getBadOmenLevel(): number;
}
export declare class Raid {
    static get $javaClass(): any;
}
