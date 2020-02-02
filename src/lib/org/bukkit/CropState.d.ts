export default interface CropState {
    getData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class CropState {
    static get $javaClass(): any;
    static get SEEDED(): CropState;
    static get GERMINATED(): CropState;
    static get VERY_SMALL(): CropState;
    static get SMALL(): CropState;
    static get MEDIUM(): CropState;
    static get TALL(): CropState;
    static get VERY_TALL(): CropState;
    static get RIPE(): CropState;
}
