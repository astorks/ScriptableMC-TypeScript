import PrintStream from '../../../java/io/PrintStream.js';
import PrintWriter from '../../../java/io/PrintWriter.js';
export default interface EventException {
    getCause(): any;
    printStackTrace(s: PrintStream): void;
    printStackTrace(): void;
    printStackTrace(s: PrintWriter): void;
    fillInStackTrace(): any;
    initCause(cause: any): any;
    getMessage(): string;
    getSuppressed(): Array<any>;
    getLocalizedMessage(): string;
    getStackTrace(): Array<any>;
    setStackTrace(stackTrace: Array<any>): void;
    addSuppressed(exception: any): void;
}
export default class EventException {
    static get $javaClass(): any;
    constructor(message: string);
    constructor(cause: any, message: string);
    constructor();
    constructor(throwable: any);
}
