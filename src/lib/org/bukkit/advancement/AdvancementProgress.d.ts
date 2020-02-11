import Advancement from '../../../org/bukkit/advancement/Advancement.js';
export default interface AdvancementProgress {
    isDone(): boolean;
    getAdvancement(): Advancement;
    awardCriteria(arg0: string): boolean;
    getDateAwarded(arg0: string): any;
    getAwardedCriteria(): any;
    revokeCriteria(arg0: string): boolean;
    getRemainingCriteria(): any;
}
export default class AdvancementProgress {
    static get $javaClass(): any;
}
