import PrintStream from '../../../java/io/PrintStream.js';
import PrintWriter from '../../../java/io/PrintWriter.js';
export default interface InvalidDescriptionException {
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
}
export default class InvalidDescriptionException {
    static get $javaClass(): any;
    constructor();
    constructor(message: string);
    constructor(cause: any);
    constructor(cause: any, message: string);
}
