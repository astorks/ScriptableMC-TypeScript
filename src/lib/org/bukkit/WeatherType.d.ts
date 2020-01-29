export interface WeatherType {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class WeatherType {
    static get $javaClass(): any;
    static get DOWNFALL(): WeatherType;
    static get CLEAR(): WeatherType;
}
