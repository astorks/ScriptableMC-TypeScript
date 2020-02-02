export default interface EventException {
    getCause(): any;
    printStackTrace(arg0: any): void;
    printStackTrace(): void;
    printStackTrace(arg0: any): void;
    fillInStackTrace(): any;
    initCause(arg0: any): any;
    getMessage(): string;
    getLocalizedMessage(): string;
    getStackTrace(): Array<any>;
    setStackTrace(arg0: Array<any>): void;
    addSuppressed(arg0: any): void;
    getSuppressed(): Array<any>;
}
export default class EventException {
    static get $javaClass(): any;
    constructor(message: string);
    constructor(cause: any, message: string);
    constructor();
    constructor(throwable: any);
}
