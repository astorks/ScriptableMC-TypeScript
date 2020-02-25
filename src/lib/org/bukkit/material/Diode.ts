declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface Diode extends MaterialData, Directional, Redstone {
	clone(): any;
	clone(): MaterialData;
	clone(): Diode;
	getData(): number;
	getDelay(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setDelay(delay: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Diode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Diode');
	}

	constructor();
	constructor(type: Material);
	constructor(facingDirection: BlockFace);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, delay: number);
	constructor(facingDirection: BlockFace, delay: number, state: boolean);
	constructor(...args: any[]) {
		return new Diode.$javaClass(...args);
	}

}

