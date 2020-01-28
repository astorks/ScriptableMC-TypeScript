import { SlotIterator } from '../../../../fr/minuskube/inv/content/SlotIterator.js';
import { ClickableItem } from '../../../../fr/minuskube/inv/ClickableItem.js';
export interface Pagination {
    last(): Pagination;
    page(arg0: number): Pagination;
    getPage(): number;
    isFirst(): boolean;
    isLast(): boolean;
    addToIterator(arg0: SlotIterator): Pagination;
    setItems(arg0: Array<ClickableItem>): Pagination;
    setItemsPerPage(arg0: number): Pagination;
    getPageItems(): Array<ClickableItem>;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
}
export declare class Pagination {
    static get $javaClass(): any;
}
