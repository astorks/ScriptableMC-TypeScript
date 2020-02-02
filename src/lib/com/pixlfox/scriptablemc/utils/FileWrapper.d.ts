export default interface FileWrapper {
    parentFile(): FileWrapper;
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
export default class FileWrapper {
    static get $javaClass(): any;
    constructor(pathName: string);
}
