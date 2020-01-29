export interface SQLException {
    iterator(): any;
    getNextException(): SQLException;
    setNextException(ex: SQLException): void;
    getSQLState(): string;
    getErrorCode(): number;
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
    spliterator(): any;
    forEach(action: any): void;
}
export declare class SQLException {
    static get $javaClass(): any;
    constructor(cause: any);
    constructor(reason: string, cause: any);
    constructor(reason: string, sqlState: string, cause: any);
    constructor(reason: string, sqlState: string, vendorCode: number, cause: any);
    constructor(reason: string, SQLState: string, vendorCode: number);
    constructor(reason: string, SQLState: string);
    constructor(reason: string);
    constructor();
}
