import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js';
import World from '../../../../org/bukkit/World.js';
export default interface PerlinNoiseGenerator extends NoiseGenerator {
    noise(x: number, y: number, z: number): number;
    noise(x: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number): number;
    noise(x: number, y: number): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}
export default class PerlinNoiseGenerator {
    static get $javaClass(): any;
    constructor(world: World);
    constructor(rand: any);
    constructor(seed: number);
    static getNoise(x: number, y: number, z: number): number;
    static getNoise(x: number): number;
    static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
    static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    static getNoise(x: number, y: number): number;
    static getInstance(): PerlinNoiseGenerator;
    static floor(x: number): number;
}
