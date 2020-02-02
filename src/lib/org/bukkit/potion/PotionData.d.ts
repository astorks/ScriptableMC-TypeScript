import PotionType from '../../../org/bukkit/potion/PotionType.js';
export default interface PotionData {
    getType(): PotionType;
    isUpgraded(): boolean;
    isExtended(): boolean;
}
export default class PotionData {
    static get $javaClass(): any;
    constructor(type: PotionType, extended: boolean, upgraded: boolean);
    constructor(type: PotionType);
}
