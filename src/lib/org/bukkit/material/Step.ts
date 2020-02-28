declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import TexturedMaterial from './TexturedMaterial.js'

export default interface Step extends TexturedMaterial {
	clone(): Step;
	clone(): TexturedMaterial;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	isInverted(): boolean;
	setData(data: number): void;
	setInverted(inv: boolean): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Step {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Step');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Step.$javaClass(...args);
	}

}

