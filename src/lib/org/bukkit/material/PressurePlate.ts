declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import PressureSensor from './PressureSensor.js'

export default interface PressurePlate extends MaterialData, PressureSensor {
	clone(): any;
	clone(): PressurePlate;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	isPressed(): boolean;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PressurePlate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PressurePlate');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PressurePlate.$javaClass(...args);
	}

}

