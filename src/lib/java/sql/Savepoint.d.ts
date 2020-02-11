export default interface Savepoint {
    getSavepointName(): string;
    getSavepointId(): number;
}
export default class Savepoint {
    static get $javaClass(): any;
}
