export interface File {
    parentFile(): File;
    writeText(text: string): void;
    readText(): string;
    readLines(): Array<string>;
    exists(): boolean;
    isDirectory(): boolean;
    isFile(): boolean;
    createNewFile(): boolean;
    mkdir(): boolean;
    mkdirs(): boolean;
}
export declare class File {
    static get $javaClass(): any;
    constructor(pathName: string);
}
