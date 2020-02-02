export default interface Ocelot$Type {
    getId(): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Ocelot$Type {
    static get $javaClass(): any;
    static get WILD_OCELOT(): Ocelot$Type;
    static get BLACK_CAT(): Ocelot$Type;
    static get RED_CAT(): Ocelot$Type;
    static get SIAMESE_CAT(): Ocelot$Type;
}
