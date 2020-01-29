export interface FileWrapper {
    isDirectory(): boolean;
    exists(): boolean;
    isFile(): boolean;
    createNewFile(): boolean;
    mkdir(): boolean;
    mkdirs(): boolean;
    readLines(): Array<string>;
    parentFile(): FileWrapper;
    readText(): string;
    writeText(text: string): void;
}
export declare class FileWrapper {
    static get $javaClass(): any;
    constructor(pathName: string);
}
