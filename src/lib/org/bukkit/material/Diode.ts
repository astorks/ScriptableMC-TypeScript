declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'

export default interface Diode extends MaterialData, Directional, Redstone {
	clone(): MaterialData;
	clone(): Diode;
	clone(): any;
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
	constructor(facingDirection: BlockFace, delay: number);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, delay: number, state: boolean);
	constructor(...args: any[]) {
		return new Diode.$javaClass(...args);
	}

}

