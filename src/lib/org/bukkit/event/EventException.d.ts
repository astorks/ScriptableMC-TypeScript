export default interface EventException {
    getCause(): any;
    printStackTrace(s: any): void;
    printStackTrace(): void;
    printStackTrace(s: any): void;
    fillInStackTrace(): any;
    initCause(cause: any): any;
    getMessage(): string;
    getSuppressed(): Array<any>;
    getLocalizedMessage(): string;
    getStackTrace(): Array<any>;
    setStackTrace(stackTrace: Array<any>): void;
    addSuppressed(exception: any): void;
}
export default class EventException {
    static get $javaClass(): any;
    constructor(message: string);
    constructor(cause: any, message: string);
    constructor();
    constructor(throwable: any);
}
