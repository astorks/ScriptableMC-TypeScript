export default interface ChatPaginator$ChatPage {
    getLines(): Array<string>;
    getPageNumber(): number;
    getTotalPages(): number;
}
export default class ChatPaginator$ChatPage {
    static get $javaClass(): any;
    constructor(lines: Array<string>, pageNumber: number, totalPages: number);
}
