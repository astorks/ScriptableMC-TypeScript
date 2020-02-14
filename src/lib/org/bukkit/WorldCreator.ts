declare var Java: any;
import ChunkGenerator from '../../org/bukkit/generator/ChunkGenerator.js'
import CommandSender from '../../org/bukkit/command/CommandSender.js'
import World from '../../org/bukkit/World.js'
import World$Environment from '../../org/bukkit/World$Environment.js'
import WorldType from '../../org/bukkit/WorldType.js'

export default interface WorldCreator {
	copy(creator: WorldCreator): WorldCreator;
	copy(world: World): WorldCreator;
	createWorld(): World;
	environment(): World$Environment;
	environment(env: World$Environment): WorldCreator;
	generateStructures(): boolean;
	generateStructures(generate: boolean): WorldCreator;
	generator(): ChunkGenerator;
	generator(generator: ChunkGenerator): WorldCreator;
	generator(generator: string): WorldCreator;
	generator(generator: string, output: CommandSender): WorldCreator;
	generatorSettings(): string;
	generatorSettings(generatorSettings: string): WorldCreator;
	hardcore(): boolean;
	hardcore(hardcore: boolean): WorldCreator;
	name(): string;
	seed(): number;
	seed(seed: number): WorldCreator;
	type(): WorldType;
	type(type: WorldType): WorldCreator;
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

