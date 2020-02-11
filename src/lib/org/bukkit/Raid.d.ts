import Location from '../../org/bukkit/Location.js';
import Raid$RaidStatus from '../../org/bukkit/Raid$RaidStatus.js';
import Raider from '../../org/bukkit/entity/Raider.js';
export default interface Raid {
    getLocation(): Location;
    getActiveTicks(): number;
    getStatus(): Raid$RaidStatus;
    getTotalGroups(): number;
    getSpawnedGroups(): number;
    getHeroes(): any;
    getRaiders(): Array<Raider>;
    getBadOmenLevel(): number;
    getTotalHealth(): number;
    getTotalWaves(): number;
    setBadOmenLevel(arg0: number): void;
    isStarted(): boolean;
}
export default class Raid {
    static get $javaClass(): any;
}
