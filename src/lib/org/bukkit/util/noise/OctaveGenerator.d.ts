import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js';
export default interface OctaveGenerator {
    setScale(scale: number): void;
    getOctaves(): Array<NoiseGenerator>;
    noise(x: number, y: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number): number;
    noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
    noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
    noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
    setXScale(scale: number): void;
    setYScale(scale: number): void;
    setZScale(scale: number): void;
    getXScale(): number;
    getYScale(): number;
    getZScale(): number;
}
export default class OctaveGenerator {
    static get $javaClass(): any;
}
