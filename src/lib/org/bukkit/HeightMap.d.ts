export default interface HeightMap {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class HeightMap {
    static get $javaClass(): any;
    static get MOTION_BLOCKING(): HeightMap;
    static get MOTION_BLOCKING_NO_LEAVES(): HeightMap;
    static get OCEAN_FLOOR(): HeightMap;
    static get OCEAN_FLOOR_WG(): HeightMap;
    static get WORLD_SURFACE(): HeightMap;
    static get WORLD_SURFACE_WG(): HeightMap;
}
