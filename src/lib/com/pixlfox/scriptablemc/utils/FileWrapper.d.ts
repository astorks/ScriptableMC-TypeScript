export default interface FileWrapper {
    isDirectory(): boolean;
    exists(): boolean;
    isFile(): boolean;
    createNewFile(): boolean;
    mkdir(): boolean;
    mkdirs(): boolean;
    parentFile(): FileWrapper;
    writeText(text: string): void;
    readLines(): Array<string>;
    readText(): string;
}
export default class FileWrapper {
    static get $javaClass(): any;
    constructor(pathName: string);
}
