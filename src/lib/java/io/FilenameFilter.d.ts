import File from '../../java/io/File.js';
export default interface FilenameFilter {
    accept(arg0: File, arg1: string): boolean;
}
export default class FilenameFilter {
    static get $javaClass(): any;
}
