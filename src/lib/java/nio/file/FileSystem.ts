declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import FileSystemProvider from './spi/FileSystemProvider.js'
import Path from './Path.js'
import PathMatcher from './PathMatcher.js'
import UserPrincipalLookupService from './attribute/UserPrincipalLookupService.js'
import WatchService from './WatchService.js'

export default interface FileSystem {
	close(): void;
	getFileStores(): any;
	getPath(arg0: string, arg1: Array<string>): Path;
	getPathMatcher(arg0: string): PathMatcher;
	getRootDirectories(): any;
	getSeparator(): string;
	getUserPrincipalLookupService(): UserPrincipalLookupService;
	isOpen(): boolean;
	isReadOnly(): boolean;
	newWatchService(): WatchService;
	provider(): FileSystemProvider;
	supportedFileAttributeViews(): any;
}

export default class FileSystem {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.FileSystem');
	}

}

