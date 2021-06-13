declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface Tripwire extends MaterialData {
	clone(): MaterialData;
	clone(): Tripwire;
	clone(): any;
	getData(): number;
	getItemType(): Material;
	isActivated(): boolean;
	isObjectTriggering(): boolean;
	setActivated(act: boolean): void;
	setData(data: number): void;
	setObjectTriggering(trig: boolean): void;
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

