export default interface ChatPaginator$ChatPage {
    getTotalPages(): number;
    getPageNumber(): number;
    getLines(): Array<string>;
}
export default class ChatPaginator$ChatPage {
    static get $javaClass(): any;
    constructor(lines: Array<string>, pageNumber: number, totalPages: number);
}
