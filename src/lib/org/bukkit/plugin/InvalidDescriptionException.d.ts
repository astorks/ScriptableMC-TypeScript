export default interface InvalidDescriptionException {
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
export default class InvalidDescriptionException {
    static get $javaClass(): any;
    constructor();
    constructor(message: string);
    constructor(cause: any);
    constructor(cause: any, message: string);
}
