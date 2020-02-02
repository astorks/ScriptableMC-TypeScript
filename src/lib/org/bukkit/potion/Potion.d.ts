import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionBrewer from '../../../org/bukkit/potion/PotionBrewer.js';
import PotionType from '../../../org/bukkit/potion/PotionType.js';
export default interface Potion {
    setType(type: PotionType): void;
    getLevel(): number;
    setLevel(level: number): void;
    toItemStack(amount: number): ItemStack;
    getEffects(): any;
    splash(): Potion;
    setSplash(isSplash: boolean): void;
    extend(): Potion;
    setHasExtendedDuration(isExtended: boolean): void;
    hasExtendedDuration(): boolean;
    isSplash(): boolean;
    toDamageValue(): number;
    getNameId(): number;
    apply(to: ItemStack): void;
    apply(to: LivingEntity): void;
    getType(): PotionType;
}
export default class Potion {
    static get $javaClass(): any;
    constructor(type: PotionType, level: number, splash: boolean);
    constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
    constructor(type: PotionType, level: number);
    constructor(type: PotionType);
    static getBrewer(): PotionBrewer;
    static fromDamage(damage: number): Potion;
    static fromItemStack(item: ItemStack): Potion;
    static setPotionBrewer(other: PotionBrewer): void;
}
