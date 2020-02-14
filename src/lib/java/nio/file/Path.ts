declare var Java: any;
import File from '../../../java/io/File.js'
import FileSystem from '../../../java/nio/file/FileSystem.js'
import LinkOption from '../../../java/nio/file/LinkOption.js'
import WatchEvent$Kind from '../../../java/nio/file/WatchEvent$Kind.js'
import WatchEvent$Modifier from '../../../java/nio/file/WatchEvent$Modifier.js'
import WatchKey from '../../../java/nio/file/WatchKey.js'
import WatchService from '../../../java/nio/file/WatchService.js'
import Watchable from '../../../java/nio/file/Watchable.js'

export default interface Path {
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>, arg2: Array<WatchEvent$Modifier>): WatchKey;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>): WatchKey;
	compareTo(arg0: Path): number;
	compareTo(arg0: any): number;
	getName(arg0: number): Path;
	startsWith(arg0: string): boolean;
	startsWith(arg0: Path): boolean;
	endsWith(arg0: string): boolean;
	endsWith(arg0: Path): boolean;
	iterator(): any;
	getParent(): Path;
	isAbsolute(): boolean;
	resolve(arg0: Path): Path;
	resolve(arg0: string): Path;
	getRoot(): Path;
	normalize(): Path;
	getFileSystem(): FileSystem;
	toFile(): File;
	getFileName(): Path;
	getNameCount(): number;
	subpath(arg0: number, arg1: number): Path;
	resolveSibling(arg0: Path): Path;
	resolveSibling(arg0: string): Path;
	relativize(arg0: Path): Path;
	toUri(): any;
	toAbsolutePath(): Path;
	toRealPath(arg0: Array<LinkOption>): Path;
	spliterator(): any;
	forEach(arg0: any): void;
}

export default class Path {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.Path');
	}
}

