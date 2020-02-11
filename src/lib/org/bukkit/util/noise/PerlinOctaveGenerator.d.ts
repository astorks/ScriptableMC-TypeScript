import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js';
import OctaveGenerator from '../../../../org/bukkit/util/noise/OctaveGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface PerlinOctaveGenerator extends OctaveGenerator {
    setScale(scale: number): void;
    noise(x: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
    setXScale(scale: number): void;
    setZScale(scale: number): void;
    getXScale(): number;
    getZScale(): number;
    getYScale(): number;
    getOctaves(): Array<NoiseGenerator>;
    setYScale(scale: number): void;
}
export default class PerlinOctaveGenerator {
    static get $javaClass(): any;
    constructor(rand: any, octaves: number);
    constructor(seed: number, octaves: number);
    constructor(world: World, octaves: number);
}
