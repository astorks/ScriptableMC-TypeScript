export default interface FileWrapper {
    isDirectory(): boolean;
    exists(): boolean;
    isFile(): boolean;
    createNewFile(): boolean;
    mkdir(): boolean;
    mkdirs(): boolean;
    writeText(text: string): void;
    parentFile(): FileWrapper;
    readText(): string;
    readLines(): Array<string>;
}
export default class FileWrapper {
    static get $javaClass(): any;
    constructor(pathName: string);
}
