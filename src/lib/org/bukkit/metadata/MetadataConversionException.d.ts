export default interface MetadataConversionException {
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
}
export default class MetadataConversionException {
    static get $javaClass(): any;
}
