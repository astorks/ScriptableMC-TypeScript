import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionBrewer from '../../../org/bukkit/potion/PotionBrewer.js';
import PotionType from '../../../org/bukkit/potion/PotionType.js';
export default interface Potion {
    apply(to: ItemStack): void;
    apply(to: LivingEntity): void;
    getType(): PotionType;
    setLevel(level: number): void;
    getLevel(): number;
    setType(type: PotionType): void;
    toItemStack(amount: number): ItemStack;
    setHasExtendedDuration(isExtended: boolean): void;
    hasExtendedDuration(): boolean;
    getEffects(): any;
    splash(): Potion;
    isSplash(): boolean;
    getNameId(): number;
    setSplash(isSplash: boolean): void;
    extend(): Potion;
    toDamageValue(): number;
}
export default class Potion {
    static get $javaClass(): any;
    constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
    constructor(type: PotionType, level: number, splash: boolean);
    constructor(type: PotionType, level: number);
    constructor(type: PotionType);
    static fromItemStack(item: ItemStack): Potion;
    static getBrewer(): PotionBrewer;
    static fromDamage(damage: number): Potion;
    static setPotionBrewer(other: PotionBrewer): void;
}
