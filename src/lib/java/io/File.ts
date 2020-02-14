declare var Java: any;
import FileFilter from '../../java/io/FileFilter.js'
import FilenameFilter from '../../java/io/FilenameFilter.js'
import Path from '../../java/nio/file/Path.js'
import Serializable from '../../java/io/Serializable.js'

export default interface File {
	compareTo(arg0: any): number;
	compareTo(arg0: File): number;
	getName(): string;
	length(): number;
	getParent(): string;
	isAbsolute(): boolean;
	getCanonicalPath(): string;
	delete(): boolean;
	setReadOnly(): boolean;
	list(): Array<string>;
	list(arg0: FilenameFilter): Array<string>;
	getParentFile(): File;
	getPath(): string;
	getAbsolutePath(): string;
	getAbsoluteFile(): File;
	getCanonicalFile(): File;
	toURL(): any;
	toURI(): any;
	canRead(): boolean;
	canWrite(): boolean;
	exists(): boolean;
	isDirectory(): boolean;
	isFile(): boolean;
	isHidden(): boolean;
	lastModified(): number;
	createNewFile(): boolean;
	deleteOnExit(): void;
	listFiles(): Array<File>;
	listFiles(arg0: FilenameFilter): Array<File>;
	listFiles(arg0: FileFilter): Array<File>;
	mkdir(): boolean;
	mkdirs(): boolean;
	renameTo(arg0: File): boolean;
	setLastModified(arg0: number): boolean;
	setWritable(arg0: boolean): boolean;
	setWritable(arg0: boolean, arg1: boolean): boolean;
	setReadable(arg0: boolean, arg1: boolean): boolean;
	setReadable(arg0: boolean): boolean;
	setExecutable(arg0: boolean): boolean;
	setExecutable(arg0: boolean, arg1: boolean): boolean;
	canExecute(): boolean;
	getTotalSpace(): number;
	getFreeSpace(): number;
	getUsableSpace(): number;
	toPath(): Path;
}

export default class File {
	public static get $javaClass(): any {
		return Java.type('java.io.File');
	}
	constructor(arg0: string, arg1: string);
	constructor(arg0: string);
	constructor(arg0: File, arg1: string);
	constructor(arg0: any);
	constructor(...args: any[]) {
		return new File.$javaClass(...args);
	}
	public static get separatorChar(): string {
		return File.$javaClass.separatorChar;
	}
	public static get separator(): string {
		return File.$javaClass.separator;
	}
	public static get pathSeparatorChar(): string {
		return File.$javaClass.pathSeparatorChar;
	}
	public static get pathSeparator(): string {
		return File.$javaClass.pathSeparator;
	}
	public static listRoots(): Array<File>;
	public static listRoots(...args: any[]): any {
		return File.$javaClass.listRoots(...args);
	}
	public static createTempFile(arg0: string, arg1: string): File;
	public static createTempFile(arg0: string, arg1: string, arg2: File): File;
	public static createTempFile(...args: any[]): any {
		return File.$javaClass.createTempFile(...args);
	}
}

