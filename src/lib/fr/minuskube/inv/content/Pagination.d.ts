import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js';
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js';
export default interface Pagination {
    last(): Pagination;
    page(arg0: number): Pagination;
    isFirst(): boolean;
    isLast(): boolean;
    getPageItems(): Array<ClickableItem>;
    getPage(): number;
    addToIterator(arg0: SlotIterator): Pagination;
    setItems(arg0: Array<ClickableItem>): Pagination;
    setItemsPerPage(arg0: number): Pagination;
    next(): Pagination;
    first(): Pagination;
    previous(): Pagination;
}
export default class Pagination {
    static get $javaClass(): any;
}
