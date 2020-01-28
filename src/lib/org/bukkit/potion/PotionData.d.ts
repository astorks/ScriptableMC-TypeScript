import { PotionType } from '../../../org/bukkit/potion/PotionType.js';
export interface PotionData {
    isUpgraded(): boolean;
    isExtended(): boolean;
    getType(): PotionType;
}
export declare class PotionData {
    static get $javaClass(): any;
    constructor(type: PotionType, extended: boolean, upgraded: boolean);
    constructor(type: PotionType);
}
