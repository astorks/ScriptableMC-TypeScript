import { WorldType } from '../../org/bukkit/WorldType.js';
import { World } from '../../org/bukkit/World.js';
import { ChunkGenerator } from '../../org/bukkit/generator/ChunkGenerator.js';
import { CommandSender } from '../../org/bukkit/command/CommandSender.js';
import { World$Environment } from '../../org/bukkit/World$Environment.js';
export interface WorldCreator {
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
    generatorSettings(generatorSettings: string): WorldCreator;
    generatorSettings(): string;
    seed(seed: number): WorldCreator;
    seed(): number;
    hardcore(): boolean;
    hardcore(hardcore: boolean): WorldCreator;
    generateStructures(generate: boolean): WorldCreator;
    generateStructures(): boolean;
}
export declare class WorldCreator {
    static get $javaClass(): any;
    constructor(_name: string);
    static _name(_name: string): WorldCreator;
    static getGeneratorForName(world: string, _name: string, output: CommandSender): ChunkGenerator;
}
