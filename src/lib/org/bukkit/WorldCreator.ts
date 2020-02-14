declare var Java: any;
import ChunkGenerator from '../../org/bukkit/generator/ChunkGenerator.js'
import CommandSender from '../../org/bukkit/command/CommandSender.js'
import World from '../../org/bukkit/World.js'
import World$Environment from '../../org/bukkit/World$Environment.js'
import WorldType from '../../org/bukkit/WorldType.js'

export default interface WorldCreator {
	createWorld(): World;
	seed(): number;
	seed(seed: number): WorldCreator;
	generator(generator: string, output: CommandSender): WorldCreator;
	generator(generator: string): WorldCreator;
	generator(): ChunkGenerator;
	generator(generator: ChunkGenerator): WorldCreator;
	generateStructures(): boolean;
	generateStructures(generate: boolean): WorldCreator;
	generatorSettings(generatorSettings: string): WorldCreator;
	generatorSettings(): string;
	hardcore(): boolean;
	hardcore(hardcore: boolean): WorldCreator;
	name(): string;
	type(type: WorldType): WorldCreator;
	type(): WorldType;
	copy(creator: WorldCreator): WorldCreator;
	copy(world: World): WorldCreator;
	environment(): World$Environment;
	environment(env: World$Environment): WorldCreator;
}

export default class WorldCreator {
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

