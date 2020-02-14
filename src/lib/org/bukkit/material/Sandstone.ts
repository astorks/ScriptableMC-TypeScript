declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import SandstoneType from '../../../org/bukkit/SandstoneType.js'

export default interface Sandstone extends MaterialData {
	setType(type: SandstoneType): void;
	clone(): any;
	clone(): Sandstone;
	clone(): MaterialData;
	getType(): SandstoneType;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sandstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sandstone');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(type: SandstoneType);
	constructor(...args: any[]) {
		return new Sandstone.$javaClass(...args);
	}
}

