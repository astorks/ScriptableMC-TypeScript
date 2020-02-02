import Advancement from '../../../org/bukkit/advancement/Advancement.js';
export default interface AdvancementProgress {
    isDone(): boolean;
    getAdvancement(): Advancement;
    getRemainingCriteria(): any;
    awardCriteria(arg0: string): boolean;
    revokeCriteria(arg0: string): boolean;
    getAwardedCriteria(): any;
    getDateAwarded(arg0: string): any;
}
export default class AdvancementProgress {
    static get $javaClass(): any;
}
