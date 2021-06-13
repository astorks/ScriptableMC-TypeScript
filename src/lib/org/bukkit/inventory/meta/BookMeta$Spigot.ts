declare var Java: any;
import BaseComponent from '../../../../net/md_5/bungee/api/chat/BaseComponent.js'

export default interface BookMeta$Spigot {
	addPage(pages: Array<Array<BaseComponent>>): void;
	getPage(page: number): Array<BaseComponent>;
	getPages(): Array<Array<BaseComponent>>;
	setPage(page: number, data: Array<BaseComponent>): void;
	setPages(pages: Array<any>): void;
	setPages(pages: Array<Array<BaseComponent>>): void;
}

export default class BookMeta$Spigot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta$Spigot');
	}

	constructor();
	constructor(...args: any[]) {
		return new BookMeta$Spigot.$javaClass(...args);
	}

}

