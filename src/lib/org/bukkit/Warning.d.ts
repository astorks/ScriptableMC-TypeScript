export interface Warning {
    value(): boolean;
    reason(): string;
    annotationType(): any;
}
export declare class Warning {
    static get $javaClass(): any;
}
