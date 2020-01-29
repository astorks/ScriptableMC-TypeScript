export interface BookMeta$Generation {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class BookMeta$Generation {
    static get $javaClass(): any;
    static get ORIGINAL(): BookMeta$Generation;
    static get COPY_OF_ORIGINAL(): BookMeta$Generation;
    static get COPY_OF_COPY(): BookMeta$Generation;
    static get TATTERED(): BookMeta$Generation;
}
