import { Advancement } from '../../../org/bukkit/advancement/Advancement.js';
export interface AdvancementProgress {
    getAdvancement(): Advancement;
    getRemainingCriteria(): any;
    awardCriteria(arg0: string): boolean;
    isDone(): boolean;
    revokeCriteria(arg0: string): boolean;
    getDateAwarded(arg0: string): any;
    getAwardedCriteria(): any;
}
export declare class AdvancementProgress {
    static get $javaClass(): any;
}
