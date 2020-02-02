export default interface ChatPaginator$ChatPage {
    getPageNumber(): number;
    getLines(): Array<string>;
    getTotalPages(): number;
}
export default class ChatPaginator$ChatPage {
    static get $javaClass(): any;
    constructor(lines: Array<string>, pageNumber: number, totalPages: number);
}
