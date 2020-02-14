declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'
import FileSystemProvider from '../../../java/nio/file/spi/FileSystemProvider.js'
import Path from '../../../java/nio/file/Path.js'
import PathMatcher from '../../../java/nio/file/PathMatcher.js'
import UserPrincipalLookupService from '../../../java/nio/file/attribute/UserPrincipalLookupService.js'
import WatchService from '../../../java/nio/file/WatchService.js'

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

