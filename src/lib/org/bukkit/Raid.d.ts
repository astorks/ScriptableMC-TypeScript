import Location from '../../org/bukkit/Location.js';
import Raid$RaidStatus from '../../org/bukkit/Raid$RaidStatus.js';
import Raider from '../../org/bukkit/entity/Raider.js';
export default interface Raid {
    getLocation(): Location;
    getBadOmenLevel(): number;
    getSpawnedGroups(): number;
    getRaiders(): Array<Raider>;
    getTotalWaves(): number;
    getActiveTicks(): number;
    setBadOmenLevel(arg0: number): void;
    getTotalHealth(): number;
    getHeroes(): any;
    isStarted(): boolean;
    getStatus(): Raid$RaidStatus;
    getTotalGroups(): number;
}
export default class Raid {
    static get $javaClass(): any;
}
