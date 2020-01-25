declare var Java: any;
import {World} from '../../org/bukkit/World.js'
import {CommandSender} from '../../org/bukkit/command/CommandSender.js'
import {ChunkGenerator} from '../../org/bukkit/generator/ChunkGenerator.js'
import {WorldType} from '../../org/bukkit/WorldType.js'
import {World$Environment} from '../../org/bukkit/World$Environment.js'

export interface WorldCreator {
	createWorld(): World;
	generator(generator: string, output: CommandSender): WorldCreator;
	generator(generator: string): WorldCreator;
	generator(): ChunkGenerator;
	generator(generator: ChunkGenerator): WorldCreator;
	generateStructures(generate: boolean): WorldCreator;
	generateStructures(): boolean;
	generatorSettings(generatorSettings: string): WorldCreator;
	generatorSettings(): string;
	hardcore(): boolean;
	hardcore(hardcore: boolean): WorldCreator;
	seed(): number;
	seed(seed: number): WorldCreator;
	name(): string;
	type(): WorldType;
	type(type: WorldType): WorldCreator;
	copy(world: World): WorldCreator;
	copy(creator: WorldCreator): WorldCreator;
	environment(env: World$Environment): WorldCreator;
	environment(): World$Environment;
}

export class WorldCreator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.WorldCreator');
	}
	constructor(_name: string);
	constructor(...args: any[]) {
		return new WorldCreator.$javaClass(...args);
	}
	public static getGeneratorForName(world: string, _name: string, output: CommandSender): ChunkGenerator;
	public static getGeneratorForName(...args: any[]): any {
		return WorldCreator.$javaClass.getGeneratorForName(...args);
	}
	public static _name(_name: string): WorldCreator;
	public static _name(...args: any[]): any {
		return WorldCreator.$javaClass.name(...args);
	}
}

