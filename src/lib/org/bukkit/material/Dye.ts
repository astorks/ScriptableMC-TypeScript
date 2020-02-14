declare var Java: any;
import Colorable from '../../../org/bukkit/material/Colorable.js'
import DyeColor from '../../../org/bukkit/DyeColor.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Dye extends MaterialData, Colorable {
	getColor(): DyeColor;
	setColor(color: DyeColor): void;
	clone(): any;
	clone(): MaterialData;
	clone(): Dye;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Dye {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Dye');
	}
	constructor();
	constructor(color: DyeColor);
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Dye.$javaClass(...args);
	}
}

