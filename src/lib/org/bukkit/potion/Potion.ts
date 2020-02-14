declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import PotionBrewer from '../../../org/bukkit/potion/PotionBrewer.js'
import PotionType from '../../../org/bukkit/potion/PotionType.js'

export default interface Potion {
	getLevel(): number;
	setLevel(level: number): void;
	setType(type: PotionType): void;
	toItemStack(amount: number): ItemStack;
	getEffects(): any;
	hasExtendedDuration(): boolean;
	isSplash(): boolean;
	toDamageValue(): number;
	getNameId(): number;
	setSplash(isSplash: boolean): void;
	extend(): Potion;
	setHasExtendedDuration(isExtended: boolean): void;
	splash(): Potion;
	apply(to: ItemStack): void;
	apply(to: LivingEntity): void;
	getType(): PotionType;
}

export default class Potion {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.potion.Potion');
	}
	constructor(type: PotionType, level: number, splash: boolean);
	constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
	constructor(type: PotionType, level: number);
	constructor(type: PotionType);
	constructor(...args: any[]) {
		return new Potion.$javaClass(...args);
	}
	public static getBrewer(): PotionBrewer;
	public static getBrewer(...args: any[]): any {
		return Potion.$javaClass.getBrewer(...args);
	}
	public static fromDamage(damage: number): Potion;
	public static fromDamage(...args: any[]): any {
		return Potion.$javaClass.fromDamage(...args);
	}
	public static fromItemStack(item: ItemStack): Potion;
	public static fromItemStack(...args: any[]): any {
		return Potion.$javaClass.fromItemStack(...args);
	}
	public static setPotionBrewer(other: PotionBrewer): void;
	public static setPotionBrewer(...args: any[]): any {
		return Potion.$javaClass.setPotionBrewer(...args);
	}
}

