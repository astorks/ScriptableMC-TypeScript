import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js';
export default interface Pagination {
    last(): Pagination;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
    page(arg0: number): Pagination;
    getPage(): number;
    setItems(arg0: Array<ClickableItem>): Pagination;
    getPageItems(): Array<ClickableItem>;
    setItemsPerPage(arg0: number): Pagination;
    addToIterator(arg0: SlotIterator): Pagination;
    isFirst(): boolean;
    isLast(): boolean;
}
export default class Pagination {
    static get $javaClass(): any;
}
