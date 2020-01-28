export interface Warning {
    reason(): string;
    value(): boolean;
    annotationType(): any;
}
export declare class Warning {
    static get $javaClass(): any;
}
