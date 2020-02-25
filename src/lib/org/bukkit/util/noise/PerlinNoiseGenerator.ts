declare var Java: any;
import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js'
import World from '../../../../org/bukkit/World.js'

export default interface PerlinNoiseGenerator extends NoiseGenerator {
	noise(x: number): number;
	noise(x: number, y: number): number;
	noise(x: number, y: number, z: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}

export default class PerlinNoiseGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.PerlinNoiseGenerator');
	}

	constructor(world: World);
	constructor(rand: any);
	constructor(seed: number);
	constructor(...args: any[]) {
		return new PerlinNoiseGenerator.$javaClass(...args);
	}

	public static floor(x: number): number;
	public static floor(...args: any[]): any {
		return PerlinNoiseGenerator.$javaClass.floor(...args);
	}

	public static getInstance(): PerlinNoiseGenerator;
	public static getInstance(...args: any[]): any {
		return PerlinNoiseGenerator.$javaClass.getInstance(...args);
	}

	public static getNoise(x: number): number;
	public static getNoise(x: number, y: number): number;
	public static getNoise(x: number, y: number, z: number): number;
	public static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(...args: any[]): any {
		return PerlinNoiseGenerator.$javaClass.getNoise(...args);
	}

}

