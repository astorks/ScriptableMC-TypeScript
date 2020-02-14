declare var Java: any;
import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js'
import SlotIterator from '../../../../fr/minuskube/inv/content/SlotIterator.js'

export default interface Pagination {
	addToIterator(arg0: SlotIterator): Pagination;
	first(): Pagination;
	getPage(): number;
	getPageItems(): Array<ClickableItem>;
	isFirst(): boolean;
	isLast(): boolean;
	last(): Pagination;
	next(): Pagination;
	page(arg0: number): Pagination;
	previous(): Pagination;
	setItems(arg0: Array<ClickableItem>): Pagination;
	setItemsPerPage(arg0: number): Pagination;
}

export default class Pagination {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.Pagination');
	}

}

