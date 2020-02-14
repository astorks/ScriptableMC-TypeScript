declare var Java: any;
import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js'
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js'

export default interface Pagination {
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

export default class Pagination {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.Pagination');
	}
}

