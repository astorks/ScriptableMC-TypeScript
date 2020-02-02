export default interface UnknownDependencyException {
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
export default class UnknownDependencyException {
    static get $javaClass(): any;
    constructor();
    constructor(throwable: any, message: string);
    constructor(message: string);
    constructor(throwable: any);
}
