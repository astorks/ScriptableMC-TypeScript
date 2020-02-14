declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import NetherWartsState from '../../../org/bukkit/NetherWartsState.js'

export default interface NetherWarts extends MaterialData {
	setState(state: NetherWartsState): void;
	clone(): any;
	clone(): MaterialData;
	clone(): NetherWarts;
	getState(): NetherWartsState;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class NetherWarts {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.NetherWarts');
	}
	constructor();
	constructor(state: NetherWartsState);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new NetherWarts.$javaClass(...args);
	}
}

