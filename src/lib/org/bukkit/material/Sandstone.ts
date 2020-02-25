declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import SandstoneType from '../../../org/bukkit/SandstoneType.js'

export default interface Sandstone extends MaterialData {
	clone(): Sandstone;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	getItemType(): Material;
	getType(): SandstoneType;
	setData(data: number): void;
	setType(type: SandstoneType): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sandstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sandstone');
	}

	constructor();
	constructor(type: Material);
	constructor(type: SandstoneType);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Sandstone.$javaClass(...args);
	}

}

