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
	compareTo(arg0: Path): number;
	compareTo(arg0: any): number;
	endsWith(other: string): boolean;
	endsWith(arg0: Path): boolean;
	forEach(action: any): void;
	getFileName(): Path;
	getFileSystem(): FileSystem;
	getName(arg0: number): Path;
	getNameCount(): number;
	getParent(): Path;
	getRoot(): Path;
	isAbsolute(): boolean;
	iterator(): any;
	normalize(): Path;
	register(watcher: WatchService, events: Array<WatchEvent$Kind>): WatchKey;
	register(arg0: WatchService, arg1: Array<WatchEvent$Kind>, arg2: Array<WatchEvent$Modifier>): WatchKey;
	relativize(arg0: Path): Path;
	resolve(other: string): Path;
	resolve(arg0: Path): Path;
	resolveSibling(other: string): Path;
	resolveSibling(other: Path): Path;
	spliterator(): any;
	startsWith(other: string): boolean;
	startsWith(arg0: Path): boolean;
	subpath(arg0: number, arg1: number): Path;
	toAbsolutePath(): Path;
	toFile(): File;
	toRealPath(arg0: Array<LinkOption>): Path;
	toUri(): any;
}

export default class Path {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.Path');
	}

	public static of(uri: any): Path;
	public static of(first: string, more: Array<string>): Path;
	public static of(...args: any[]): any {
		return Path.$javaClass.of(...args);
	}

}

