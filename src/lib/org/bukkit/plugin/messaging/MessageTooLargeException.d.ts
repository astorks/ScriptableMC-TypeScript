export default interface MessageTooLargeException {
    printStackTrace(s: any): void;
    printStackTrace(): void;
    printStackTrace(s: any): void;
    fillInStackTrace(): any;
    getCause(): any;
    initCause(cause: any): any;
    getMessage(): string;
    getSuppressed(): Array<any>;
    getLocalizedMessage(): string;
    getStackTrace(): Array<any>;
    setStackTrace(stackTrace: Array<any>): void;
    addSuppressed(exception: any): void;
}
export default class MessageTooLargeException {
    static get $javaClass(): any;
    constructor(msg: string);
    constructor(length: number);
    constructor(message: Array<number>);
    constructor();
}
