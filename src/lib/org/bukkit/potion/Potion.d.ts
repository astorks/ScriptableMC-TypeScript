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
    toItemStack(amount: number): ItemStack;
    setType(type: PotionType): void;
    setHasExtendedDuration(isExtended: boolean): void;
    hasExtendedDuration(): boolean;
    getEffects(): any;
    splash(): Potion;
    setSplash(isSplash: boolean): void;
    extend(): Potion;
    toDamageValue(): number;
    isSplash(): boolean;
    getNameId(): number;
}
export default class Potion {
    static get $javaClass(): any;
    constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
    constructor(type: PotionType, level: number, splash: boolean);
    constructor(type: PotionType, level: number);
    constructor(type: PotionType);
    static getBrewer(): PotionBrewer;
    static fromItemStack(item: ItemStack): Potion;
    static setPotionBrewer(other: PotionBrewer): void;
    static fromDamage(damage: number): Potion;
}
