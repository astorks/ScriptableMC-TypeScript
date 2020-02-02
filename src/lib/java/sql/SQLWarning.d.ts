import SQLException from '../../java/sql/SQLException.js';
export default interface SQLWarning extends SQLException {
    getNextWarning(): SQLWarning;
    setNextWarning(w: SQLWarning): void;
    iterator(): any;
    getSQLState(): string;
    getErrorCode(): number;
    getNextException(): SQLException;
    setNextException(ex: SQLException): void;
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
export default class SQLWarning {
    static get $javaClass(): any;
    constructor(cause: any);
    constructor(reason: string, cause: any);
    constructor(reason: string, SQLState: string, cause: any);
    constructor(reason: string, SQLState: string, vendorCode: number, cause: any);
    constructor(reason: string, SQLState: string, vendorCode: number);
    constructor(reason: string, SQLState: string);
    constructor(reason: string);
    constructor();
}
