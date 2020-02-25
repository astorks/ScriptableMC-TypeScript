declare var Java: any;
import PerlinNoiseGenerator from '../../../../org/bukkit/util/noise/PerlinNoiseGenerator.js'
import World from '../../../../org/bukkit/World.js'

export default interface SimplexNoiseGenerator extends PerlinNoiseGenerator {
	noise(x: number): number;
	noise(xin: number, yin: number): number;
	noise(xin: number, yin: number, zin: number): number;
	noise(x: number, y: number, z: number, w: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number, normalized: boolean): number;
}

export default class SimplexNoiseGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.SimplexNoiseGenerator');
	}

	constructor(world: World);
	constructor(seed: number);
	constructor(rand: any);
	constructor(...args: any[]) {
		return new SimplexNoiseGenerator.$javaClass(...args);
	}

	public static floor(x: number): number;
	public static floor(...args: any[]): any {
		return SimplexNoiseGenerator.$javaClass.floor(...args);
	}

	public static getInstance(): SimplexNoiseGenerator;
	public static getInstance(): PerlinNoiseGenerator;
	public static getInstance(...args: any[]): any {
		return SimplexNoiseGenerator.$javaClass.getInstance(...args);
	}

	public static getNoise(xin: number): number;
	public static getNoise(xin: number, yin: number): number;
	public static getNoise(xin: number, yin: number, zin: number): number;
	public static getNoise(x: number, y: number, z: number, w: number): number;
	public static getNoise(x: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(x: number, y: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(x: number, y: number, z: number, octaves: number, frequency: number, amplitude: number): number;
	public static getNoise(...args: any[]): any {
		return SimplexNoiseGenerator.$javaClass.getNoise(...args);
	}

}

