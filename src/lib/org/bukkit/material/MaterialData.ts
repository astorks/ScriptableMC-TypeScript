declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface MaterialData {
	clone(): any;
	clone(): MaterialData;
	getItemType(): Material;
	toItemStack(amount: number): ItemStack;
	toItemStack(): ItemStack;
	getData(): number;
	setData(data: number): void;
}

export class MaterialData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MaterialData');
	}
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new MaterialData.$javaClass(...args);
	}
}

