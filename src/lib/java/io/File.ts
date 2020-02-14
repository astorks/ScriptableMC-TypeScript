declare var Java: any;
import FileFilter from '../../java/io/FileFilter.js'
import FilenameFilter from '../../java/io/FilenameFilter.js'
import Path from '../../java/nio/file/Path.js'
import Serializable from '../../java/io/Serializable.js'

export default interface File {
	canExecute(): boolean;
	canRead(): boolean;
	canWrite(): boolean;
	compareTo(pathname: File): number;
	compareTo(arg0: any): number;
	createNewFile(): boolean;
	delete(): boolean;
	deleteOnExit(): void;
	exists(): boolean;
	getAbsoluteFile(): File;
	getAbsolutePath(): string;
	getCanonicalFile(): File;
	getCanonicalPath(): string;
	getFreeSpace(): number;
	getName(): string;
	getParent(): string;
	getParentFile(): File;
	getPath(): string;
	getTotalSpace(): number;
	getUsableSpace(): number;
	isAbsolute(): boolean;
	isDirectory(): boolean;
	isFile(): boolean;
	isHidden(): boolean;
	lastModified(): number;
	length(): number;
	list(): Array<string>;
	list(filter: FilenameFilter): Array<string>;
	listFiles(): Array<File>;
	listFiles(filter: FileFilter): Array<File>;
	listFiles(filter: FilenameFilter): Array<File>;
	mkdir(): boolean;
	mkdirs(): boolean;
	renameTo(dest: File): boolean;
	setExecutable(executable: boolean): boolean;
	setExecutable(executable: boolean, ownerOnly: boolean): boolean;
	setLastModified(time: number): boolean;
	setReadOnly(): boolean;
	setReadable(readable: boolean): boolean;
	setReadable(readable: boolean, ownerOnly: boolean): boolean;
	setWritable(writable: boolean): boolean;
	setWritable(writable: boolean, ownerOnly: boolean): boolean;
	toPath(): Path;
	toURI(): any;
	toURL(): any;
}

export default class File {
	public static get $javaClass(): any {
		return Java.type('java.io.File');
	}

	constructor(uri: any);
	constructor(pathname: string);
	constructor(parent: string, child: string);
	constructor(parent: File, child: string);
	constructor(...args: any[]) {
		return new File.$javaClass(...args);
	}

	public static get pathSeparator(): string {
		return File.$javaClass.pathSeparator;
	}

	public static get pathSeparatorChar(): string {
		return File.$javaClass.pathSeparatorChar;
	}

	public static get separator(): string {
		return File.$javaClass.separator;
	}

	public static get separatorChar(): string {
		return File.$javaClass.separatorChar;
	}

	public static createTempFile(prefix: string, suffix: string): File;
	public static createTempFile(prefix: string, suffix: string, directory: File): File;
	public static createTempFile(...args: any[]): any {
		return File.$javaClass.createTempFile(...args);
	}

	public static listRoots(): Array<File>;
	public static listRoots(...args: any[]): any {
		return File.$javaClass.listRoots(...args);
	}

}

