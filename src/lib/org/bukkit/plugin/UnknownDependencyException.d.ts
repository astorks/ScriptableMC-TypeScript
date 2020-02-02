export default interface UnknownDependencyException {
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
export default class UnknownDependencyException {
    static get $javaClass(): any;
    constructor();
    constructor(throwable: any, message: string);
    constructor(message: string);
    constructor(throwable: any);
}
