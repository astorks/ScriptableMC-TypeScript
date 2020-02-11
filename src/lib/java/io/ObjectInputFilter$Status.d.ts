export default interface ObjectInputFilter$Status {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class ObjectInputFilter$Status {
    static get $javaClass(): any;
    static get UNDECIDED(): ObjectInputFilter$Status;
    static get ALLOWED(): ObjectInputFilter$Status;
    static get REJECTED(): ObjectInputFilter$Status;
}
