import PrintStream from '../../java/io/PrintStream.js';
import PrintWriter from '../../java/io/PrintWriter.js';
export default interface SQLException {
    iterator(): any;
    getNextException(): SQLException;
    getSQLState(): string;
    getErrorCode(): number;
    setNextException(ex: SQLException): void;
    printStackTrace(s: PrintStream): void;
    printStackTrace(): void;
    printStackTrace(s: PrintWriter): void;
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
export default class SQLException {
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
