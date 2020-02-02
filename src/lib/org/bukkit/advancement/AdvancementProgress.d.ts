import Advancement from '../../../org/bukkit/advancement/Advancement.js';
export default interface AdvancementProgress {
    getAdvancement(): Advancement;
    awardCriteria(arg0: string): boolean;
    revokeCriteria(arg0: string): boolean;
    getDateAwarded(arg0: string): any;
    getRemainingCriteria(): any;
    isDone(): boolean;
    getAwardedCriteria(): any;
}
export default class AdvancementProgress {
    static get $javaClass(): any;
}
