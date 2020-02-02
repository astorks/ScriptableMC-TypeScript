export default interface NoiseGenerator {
    noise(x: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(arg0: number, arg1: number, arg2: number): number;
    noise(x: number): number;
    noise(x: number, y: number): number;
    noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}
export default class NoiseGenerator {
    static get $javaClass(): any;
    constructor();
    static floor(x: number): number;
}
