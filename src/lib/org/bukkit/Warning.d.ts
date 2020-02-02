export default interface Warning {
    reason(): string;
    value(): boolean;
    annotationType(): any;
}
export default class Warning {
    static get $javaClass(): any;
}
