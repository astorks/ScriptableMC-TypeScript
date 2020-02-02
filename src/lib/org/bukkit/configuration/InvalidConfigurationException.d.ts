export default interface InvalidConfigurationException {
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
export default class InvalidConfigurationException {
    static get $javaClass(): any;
    constructor(msg: string, cause: any);
    constructor(cause: any);
    constructor(msg: string);
    constructor();
}
