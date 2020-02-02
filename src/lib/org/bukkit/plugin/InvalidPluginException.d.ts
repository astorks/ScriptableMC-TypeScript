export default interface InvalidPluginException {
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
export default class InvalidPluginException {
    static get $javaClass(): any;
    constructor(message: string);
    constructor(message: string, cause: any);
    constructor();
    constructor(cause: any);
}
