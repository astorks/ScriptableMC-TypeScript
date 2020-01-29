import { Advancement } from '../../../org/bukkit/advancement/Advancement.js';
export interface AdvancementProgress {
    isDone(): boolean;
    getAdvancement(): Advancement;
    getRemainingCriteria(): any;
    getAwardedCriteria(): any;
    revokeCriteria(arg0: string): boolean;
    awardCriteria(arg0: string): boolean;
    getDateAwarded(arg0: string): any;
}
export declare class AdvancementProgress {
    static get $javaClass(): any;
}
