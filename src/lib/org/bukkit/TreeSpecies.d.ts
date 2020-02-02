export default interface TreeSpecies {
    getData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class TreeSpecies {
    static get $javaClass(): any;
    static get GENERIC(): TreeSpecies;
    static get REDWOOD(): TreeSpecies;
    static get BIRCH(): TreeSpecies;
    static get JUNGLE(): TreeSpecies;
    static get ACACIA(): TreeSpecies;
    static get DARK_OAK(): TreeSpecies;
}
