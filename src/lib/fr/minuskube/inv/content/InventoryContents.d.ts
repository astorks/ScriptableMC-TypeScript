import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import Pagination from '../../../../fr/minuskube/inv/content/Pagination.js';
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js';
import SlotIterator$Type from '../../../../fr/minuskube/inv/content/SlotIterator$Type.js';
import SlotPos from '../../../../fr/minuskube/inv/content/SlotPos.js';
import SmartInventory from '../../../../fr/minuskube/inv/SmartInventory.js';
export default interface InventoryContents {
    add(arg0: ClickableItem): InventoryContents;
    get(arg0: SlotPos): any;
    get(arg0: number, arg1: number): any;
    iterator(arg0: string): any;
    fill(arg0: ClickableItem): InventoryContents;
    set(arg0: number, arg1: number, arg2: ClickableItem): InventoryContents;
    set(arg0: SlotPos, arg1: ClickableItem): InventoryContents;
    setProperty(arg0: string, arg1: any): InventoryContents;
    all(): Array<Array<ClickableItem>>;
    pagination(): Pagination;
    firstEmpty(): any;
    inventory(): SmartInventory;
    property(arg0: string): any;
    property(arg0: string, arg1: any): any;
    fillBorders(arg0: ClickableItem): InventoryContents;
    fillRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ClickableItem): InventoryContents;
    fillRect(arg0: SlotPos, arg1: SlotPos, arg2: ClickableItem): InventoryContents;
    fillColumn(arg0: number, arg1: ClickableItem): InventoryContents;
    fillRow(arg0: number, arg1: ClickableItem): InventoryContents;
    newIterator(arg0: SlotIterator$Type, arg1: number, arg2: number): SlotIterator;
    newIterator(arg0: string, arg1: SlotIterator$Type, arg2: number, arg3: number): SlotIterator;
    newIterator(arg0: string, arg1: SlotIterator$Type, arg2: SlotPos): SlotIterator;
    newIterator(arg0: SlotIterator$Type, arg1: SlotPos): SlotIterator;
}
export default class InventoryContents {
    static get $javaClass(): any;
}
