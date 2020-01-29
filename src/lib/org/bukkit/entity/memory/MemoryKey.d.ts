import { NamespacedKey } from '../../../../org/bukkit/NamespacedKey.js';
import { Keyed } from '../../../../org/bukkit/Keyed.js';
export interface MemoryKey extends Keyed {
    getKey(): NamespacedKey;
    getMemoryClass(): any;
}
export declare class MemoryKey {
    static get $javaClass(): any;
    static get HOME(): MemoryKey;
    static get MEETING_POINT(): MemoryKey;
    static get JOB_SITE(): MemoryKey;
    static get LAST_SLEPT(): MemoryKey;
    static get LAST_WOKEN(): MemoryKey;
    static get LAST_WORKED_AT_POI(): MemoryKey;
    static values(): any;
    static getByKey(namespacedKey: NamespacedKey): MemoryKey;
}
