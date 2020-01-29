import { ClickableItem } from '../../../../fr/minuskube/inv/ClickableItem.js';
import { SlotIterator } from '../../../../fr/minuskube/inv/content/SlotIterator.js';
export interface Pagination {
    last(): Pagination;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
    page(arg0: number): Pagination;
    isLast(): boolean;
    isFirst(): boolean;
    getPageItems(): Array<ClickableItem>;
    getPage(): number;
    setItems(arg0: Array<ClickableItem>): Pagination;
    addToIterator(arg0: SlotIterator): Pagination;
    setItemsPerPage(arg0: number): Pagination;
}
export declare class Pagination {
    static get $javaClass(): any;
}
