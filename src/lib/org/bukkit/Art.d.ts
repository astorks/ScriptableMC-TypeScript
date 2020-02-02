import Keyed from '../../org/bukkit/Keyed.js';
import NamespacedKey from '../../org/bukkit/NamespacedKey.js';
export default interface Art extends Keyed {
    getKey(): NamespacedKey;
    getId(): number;
    getBlockWidth(): number;
    getBlockHeight(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Art {
    static get $javaClass(): any;
    static get KEBAB(): Art;
    static get AZTEC(): Art;
    static get ALBAN(): Art;
    static get AZTEC2(): Art;
    static get BOMB(): Art;
    static get PLANT(): Art;
    static get WASTELAND(): Art;
    static get POOL(): Art;
    static get COURBET(): Art;
    static get SEA(): Art;
    static get SUNSET(): Art;
    static get CREEBET(): Art;
    static get WANDERER(): Art;
    static get GRAHAM(): Art;
    static get MATCH(): Art;
    static get BUST(): Art;
    static get STAGE(): Art;
    static get VOID(): Art;
    static get SKULL_AND_ROSES(): Art;
    static get WITHER(): Art;
    static get FIGHTERS(): Art;
    static get POINTER(): Art;
    static get PIGSCENE(): Art;
    static get BURNING_SKULL(): Art;
    static get SKELETON(): Art;
    static get DONKEY_KONG(): Art;
}
