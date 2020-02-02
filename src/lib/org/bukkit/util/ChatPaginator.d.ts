import ChatPaginator$ChatPage from '../../../org/bukkit/util/ChatPaginator$ChatPage.js';
export default interface ChatPaginator {
}
export default class ChatPaginator {
    static get $javaClass(): any;
    constructor();
    static get GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH(): number;
    static get AVERAGE_CHAT_PAGE_WIDTH(): number;
    static get UNBOUNDED_PAGE_WIDTH(): number;
    static get OPEN_CHAT_PAGE_HEIGHT(): number;
    static get CLOSED_CHAT_PAGE_HEIGHT(): number;
    static get UNBOUNDED_PAGE_HEIGHT(): number;
    static paginate(unpaginatedString: string, pageNumber: number, lineLength: number, pageHeight: number): ChatPaginator$ChatPage;
    static paginate(unpaginatedString: string, pageNumber: number): ChatPaginator$ChatPage;
    static wordWrap(rawString: string, lineLength: number): Array<string>;
}
