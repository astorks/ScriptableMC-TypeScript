declare var Java: any;
import {ClickableItem} from '../../../../fr/minuskube/inv/ClickableItem.js'
import {SlotPos} from '../../../../fr/minuskube/inv/content/SlotPos.js'
import {Pagination} from '../../../../fr/minuskube/inv/content/Pagination.js'
import {SmartInventory} from '../../../../fr/minuskube/inv/SmartInventory.js'
import {SlotIterator} from '../../../../fr/minuskube/inv/content/SlotIterator.js'
import {SlotIterator$Type} from '../../../../fr/minuskube/inv/content/SlotIterator$Type.js'

export interface InventoryContents {
	add(arg0: ClickableItem): InventoryContents;
	get(arg0: SlotPos): any;
	get(arg0: number, arg1: number): any;
	iterator(arg0: string): any;
	fill(arg0: ClickableItem): InventoryContents;
	set(arg0: number, arg1: number, arg2: ClickableItem): InventoryContents;
	set(arg0: SlotPos, arg1: ClickableItem): InventoryContents;
	setProperty(arg0: string, arg1: any): InventoryContents;
	all(): Array<Array<ClickableItem>>;
	property(arg0: string, arg1: any): any;
	property(arg0: string): any;
	pagination(): Pagination;
	inventory(): SmartInventory;
	firstEmpty(): any;
	fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ClickableItem): InventoryContents;
	fillRect(arg0: SlotPos, arg1: SlotPos, arg2: ClickableItem): InventoryContents;
	fillRow(arg0: number, arg1: ClickableItem): InventoryContents;
	fillBorders(arg0: ClickableItem): InventoryContents;
	newIterator(arg0: string, arg1: SlotIterator$Type, arg2: SlotPos): SlotIterator;
	newIterator(arg0: SlotIterator$Type, arg1: SlotPos): SlotIterator;
	newIterator(arg0: string, arg1: SlotIterator$Type, arg2: number, arg3: number): SlotIterator;
	newIterator(arg0: SlotIterator$Type, arg1: number, arg2: number): SlotIterator;
	fillColumn(arg0: number, arg1: ClickableItem): InventoryContents;
}

export class InventoryContents {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.InventoryContents');
	}
}

