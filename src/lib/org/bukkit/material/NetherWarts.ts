declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import NetherWartsState from '../../../org/bukkit/NetherWartsState.js'

export default interface NetherWarts extends MaterialData {
	clone(): NetherWarts;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getItemType(): Material;
	getState(): NetherWartsState;
	setData(data: number): void;
	setState(state: NetherWartsState): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class NetherWarts {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.NetherWarts');
	}

	constructor();
	constructor(type: Material);
	constructor(state: NetherWartsState);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new NetherWarts.$javaClass(...args);
	}

}

