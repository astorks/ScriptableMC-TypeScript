export default interface Warning {
    value(): boolean;
    reason(): string;
    annotationType(): any;
}
export default class Warning {
    static get $javaClass(): any;
}
