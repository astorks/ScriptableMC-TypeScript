declare var Java: any;
import {Material} from '../../../org/bukkit/Material.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface MaterialData {
	setData(data: number): void;
	getData(): number;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
	clone(): any;
	clone(): MaterialData;
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

