import { PotionType } from '../../../org/bukkit/potion/PotionType.js';
export interface PotionData {
    getType(): PotionType;
    isExtended(): boolean;
    isUpgraded(): boolean;
}
export declare class PotionData {
    static get $javaClass(): any;
    constructor(type: PotionType, extended: boolean, upgraded: boolean);
    constructor(type: PotionType);
}
