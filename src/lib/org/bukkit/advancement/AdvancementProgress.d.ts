import Advancement from '../../../org/bukkit/advancement/Advancement.js';
export default interface AdvancementProgress {
    isDone(): boolean;
    getAdvancement(): Advancement;
    getRemainingCriteria(): any;
    getDateAwarded(arg0: string): any;
    revokeCriteria(arg0: string): boolean;
    awardCriteria(arg0: string): boolean;
    getAwardedCriteria(): any;
}
export default class AdvancementProgress {
    static get $javaClass(): any;
}
