import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionBrewer from '../../../org/bukkit/potion/PotionBrewer.js';
import PotionType from '../../../org/bukkit/potion/PotionType.js';
export default interface Potion {
    apply(to: ItemStack): void;
    apply(to: LivingEntity): void;
    getType(): PotionType;
    setType(type: PotionType): void;
    getLevel(): number;
    setLevel(level: number): void;
    toItemStack(amount: number): ItemStack;
    getEffects(): any;
    hasExtendedDuration(): boolean;
    setHasExtendedDuration(isExtended: boolean): void;
    getNameId(): number;
    isSplash(): boolean;
    extend(): Potion;
    toDamageValue(): number;
    splash(): Potion;
    setSplash(isSplash: boolean): void;
}
export default class Potion {
    static get $javaClass(): any;
    constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
    constructor(type: PotionType, level: number, splash: boolean);
    constructor(type: PotionType, level: number);
    constructor(type: PotionType);
    static getBrewer(): PotionBrewer;
    static fromItemStack(item: ItemStack): Potion;
    static fromDamage(damage: number): Potion;
    static setPotionBrewer(other: PotionBrewer): void;
}
