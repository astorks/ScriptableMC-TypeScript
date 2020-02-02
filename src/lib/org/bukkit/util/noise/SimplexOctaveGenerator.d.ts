import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js';
import OctaveGenerator from '../../../../org/bukkit/util/noise/OctaveGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface SimplexOctaveGenerator extends OctaveGenerator {
    setScale(scale: number): void;
    noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
    setWScale(scale: number): void;
    getWScale(): number;
    noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
    setXScale(scale: number): void;
    setYScale(scale: number): void;
    setZScale(scale: number): void;
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
    getOctaves(): Array<NoiseGenerator>;
}
export default class SimplexOctaveGenerator {
    static get $javaClass(): any;
    constructor(world: World, octaves: number);
    constructor(seed: number, octaves: number);
    constructor(rand: any, octaves: number);
}
