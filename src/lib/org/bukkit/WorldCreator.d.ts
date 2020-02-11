import ChunkGenerator from '../../org/bukkit/generator/ChunkGenerator.js';
import CommandSender from '../../org/bukkit/command/CommandSender.js';
import World from '../../org/bukkit/World.js';
import World$Environment from '../../org/bukkit/World$Environment.js';
import WorldType from '../../org/bukkit/WorldType.js';
export default interface WorldCreator {
    name(): string;
    type(): WorldType;
    type(type: WorldType): WorldCreator;
    copy(creator: WorldCreator): WorldCreator;
    copy(world: World): WorldCreator;
    generator(): ChunkGenerator;
    generator(generator: ChunkGenerator): WorldCreator;
    generator(generator: string): WorldCreator;
    generator(generator: string, output: CommandSender): WorldCreator;
    environment(env: World$Environment): WorldCreator;
    environment(): World$Environment;
    createWorld(): World;
    hardcore(): boolean;
    hardcore(hardcore: boolean): WorldCreator;
    generateStructures(): boolean;
    generateStructures(generate: boolean): WorldCreator;
    generatorSettings(): string;
    generatorSettings(generatorSettings: string): WorldCreator;
    seed(): number;
    seed(seed: number): WorldCreator;
}
export default class WorldCreator {
    static get $javaClass(): any;
    constructor(_name: string);
    static _name(_name: string): WorldCreator;
    static getGeneratorForName(world: string, _name: string, output: CommandSender): ChunkGenerator;
}
