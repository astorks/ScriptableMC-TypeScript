import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js';
export default interface Pagination {
    last(): Pagination;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
    page(arg0: number): Pagination;
    getPageItems(): Array<ClickableItem>;
    addToIterator(arg0: SlotIterator): Pagination;
    setItems(arg0: Array<ClickableItem>): Pagination;
    getPage(): number;
    setItemsPerPage(arg0: number): Pagination;
    isFirst(): boolean;
    isLast(): boolean;
}
export default class Pagination {
    static get $javaClass(): any;
}
