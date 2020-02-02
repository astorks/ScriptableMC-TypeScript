export default interface Savepoint {
    getSavepointId(): number;
    getSavepointName(): string;
}
export default class Savepoint {
    static get $javaClass(): any;
}
