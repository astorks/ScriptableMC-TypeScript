declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface RecipeChoice {
	and(other: any): any;
	clone(): any;
	clone(): RecipeChoice;
	getItemStack(): ItemStack;
	negate(): any;
	or(other: any): any;
	test(arg0: any): boolean;
	test(arg0: ItemStack): boolean;
}

export default class RecipeChoice {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.RecipeChoice');
	}

}

