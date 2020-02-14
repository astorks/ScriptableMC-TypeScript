declare var Java: any;
import NoiseGenerator from '../../../../org/bukkit/util/noise/NoiseGenerator.js'

export default interface OctaveGenerator {
	setScale(scale: number): void;
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

export default class OctaveGenerator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.noise.OctaveGenerator');
	}
}

