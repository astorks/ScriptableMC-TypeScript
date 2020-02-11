import File from '../../../java/io/File.js';
export default interface FileUtil {
}
export default class FileUtil {
    static get $javaClass(): any;
    constructor();
    static copy(inFile: File, outFile: File): boolean;
}
