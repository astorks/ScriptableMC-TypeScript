declare var Java: any;

export default interface ChatPaginator$ChatPage {
	getLines(): Array<string>;
	getPageNumber(): number;
	getTotalPages(): number;
}

export default class ChatPaginator$ChatPage {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.ChatPaginator$ChatPage');
	}

	constructor(lines: Array<string>, pageNumber: number, totalPages: number);
	constructor(...args: any[]) {
		return new ChatPaginator$ChatPage.$javaClass(...args);
	}

}

