import Location from '../../org/bukkit/Location.js';
import Raid$RaidStatus from '../../org/bukkit/Raid$RaidStatus.js';
export default interface Raid {
    getLocation(): Location;
    getTotalWaves(): number;
    getHeroes(): any;
    getSpawnedGroups(): number;
    isStarted(): boolean;
    getActiveTicks(): number;
    setBadOmenLevel(arg0: number): void;
    getBadOmenLevel(): number;
    getStatus(): Raid$RaidStatus;
    getTotalGroups(): number;
    getRaiders(): any;
    getTotalHealth(): number;
}
export default class Raid {
    static get $javaClass(): any;
}
