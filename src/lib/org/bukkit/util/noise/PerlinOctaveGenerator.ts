declare var Java: any;
import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js'
import OctaveGenerator from '../../../../org/bukkit/util/noise/OctaveGenerator.js'
import World from '../../../../org/bukkit/World.js'

export default interface PerlinOctaveGenerator extends OctaveGenerator {
	getOctaves(): Array<NoiseGenerator>;
	getXScale(): number;
	getYScale(): number;
	getZScale(): number;
	noise(x: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, frequency: number, amplitude: number): number;
	noise(x: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, frequency: number, amplitude: number, normalized: boolean): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number): number;
	noise(x: number, y: number, z: number, frequency: number, amplitude: number, normalized: boolean): number;
	setScale(scale: number): void;
	setXScale(scale: number): void;
	setYScale(scale: number): void;
	setZScale(scale: number): void;
}

export default class PerlinOctaveGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.PerlinOctaveGenerator');
	}

	constructor(world: World, octaves: number);
	constructor(rand: any, octaves: number);
	constructor(seed: number, octaves: number);
	constructor(...args: any[]) {
		return new PerlinOctaveGenerator.$javaClass(...args);
	}

}

