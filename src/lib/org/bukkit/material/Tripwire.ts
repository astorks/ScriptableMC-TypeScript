declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Tripwire extends MaterialData {
	setActivated(act: boolean): void;
	isActivated(): boolean;
	isObjectTriggering(): boolean;
	setObjectTriggering(trig: boolean): void;
	clone(): Tripwire;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Tripwire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Tripwire');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Tripwire.$javaClass(...args);
	}
}

