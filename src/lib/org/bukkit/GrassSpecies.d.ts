export default interface GrassSpecies {
    getData(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class GrassSpecies {
    static get $javaClass(): any;
    static get DEAD(): GrassSpecies;
    static get NORMAL(): GrassSpecies;
    static get FERN_LIKE(): GrassSpecies;
}
