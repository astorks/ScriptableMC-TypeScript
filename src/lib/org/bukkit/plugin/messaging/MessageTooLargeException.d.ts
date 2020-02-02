export default interface MessageTooLargeException {
    printStackTrace(arg0: any): void;
    printStackTrace(): void;
    printStackTrace(arg0: any): void;
    fillInStackTrace(): any;
    getCause(): any;
    initCause(arg0: any): any;
    getMessage(): string;
    getLocalizedMessage(): string;
    getStackTrace(): Array<any>;
    setStackTrace(arg0: Array<any>): void;
    addSuppressed(arg0: any): void;
    getSuppressed(): Array<any>;
}
export default class MessageTooLargeException {
    static get $javaClass(): any;
    constructor(msg: string);
    constructor(length: number);
    constructor(message: Array<number>);
    constructor();
}
