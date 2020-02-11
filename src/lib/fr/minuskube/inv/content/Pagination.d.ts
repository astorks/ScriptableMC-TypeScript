import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js';
export default interface Pagination {
    last(): Pagination;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
    page(arg0: number): Pagination;
    isFirst(): boolean;
    setItems(arg0: Array<ClickableItem>): Pagination;
    getPageItems(): Array<ClickableItem>;
    getPage(): number;
    addToIterator(arg0: SlotIterator): Pagination;
    isLast(): boolean;
    setItemsPerPage(arg0: number): Pagination;
}
export default class Pagination {
    static get $javaClass(): any;
}
