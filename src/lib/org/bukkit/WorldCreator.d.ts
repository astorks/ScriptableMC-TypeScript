import ChunkGenerator from '../../org/bukkit/generator/ChunkGenerator.js';
import CommandSender from '../../org/bukkit/command/CommandSender.js';
import World from '../../org/bukkit/World.js';
import World$Environment from '../../org/bukkit/World$Environment.js';
import WorldType from '../../org/bukkit/WorldType.js';
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
    static get $javaClass(): any;
    constructor(_name: string);
    static getGeneratorForName(world: string, _name: string, output: CommandSender): ChunkGenerator;
    static _name(_name: string): WorldCreator;
}
