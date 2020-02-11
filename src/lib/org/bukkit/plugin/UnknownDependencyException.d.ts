import PrintStream from '../../../java/io/PrintStream.js';
import PrintWriter from '../../../java/io/PrintWriter.js';
export default interface UnknownDependencyException {
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
export default class UnknownDependencyException {
    static get $javaClass(): any;
    constructor();
    constructor(throwable: any, message: string);
    constructor(message: string);
    constructor(throwable: any);
}
