declare var Java: any;
import AccessMode from '../../../../java/nio/file/AccessMode.js'
import AsynchronousFileChannel from '../../../../java/nio/channels/AsynchronousFileChannel.js'
import BasicFileAttributes from '../../../../java/nio/file/attribute/BasicFileAttributes.js'
import CopyOption from '../../../../java/nio/file/CopyOption.js'
import DirectoryStream from '../../../../java/nio/file/DirectoryStream.js'
import DirectoryStream$Filter from '../../../../java/nio/file/DirectoryStream$Filter.js'
import FileAttribute from '../../../../java/nio/file/attribute/FileAttribute.js'
import FileAttributeView from '../../../../java/nio/file/attribute/FileAttributeView.js'
import FileChannel from '../../../../java/nio/channels/FileChannel.js'
import FileStore from '../../../../java/nio/file/FileStore.js'
import FileSystem from '../../../../java/nio/file/FileSystem.js'
import InputStream from '../../../../java/io/InputStream.js'
import LinkOption from '../../../../java/nio/file/LinkOption.js'
import OpenOption from '../../../../java/nio/file/OpenOption.js'
import OutputStream from '../../../../java/io/OutputStream.js'
import Path from '../../../../java/nio/file/Path.js'
import SeekableByteChannel from '../../../../java/nio/channels/SeekableByteChannel.js'

export default interface FileSystemProvider {
	checkAccess(arg0: Path, arg1: Array<AccessMode>): void;
	copy(arg0: Path, arg1: Path, arg2: Array<CopyOption>): void;
	createDirectory(arg0: Path, arg1: Array<FileAttribute>): void;
	createLink(link: Path, existing: Path): void;
	createSymbolicLink(link: Path, target: Path, attrs: Array<FileAttribute>): void;
	delete(arg0: Path): void;
	deleteIfExists(path: Path): boolean;
	getFileAttributeView(arg0: Path, arg1: any, arg2: Array<LinkOption>): FileAttributeView;
	getFileStore(arg0: Path): FileStore;
	getFileSystem(arg0: any): FileSystem;
	getPath(arg0: any): Path;
	getScheme(): string;
	isHidden(arg0: Path): boolean;
	isSameFile(arg0: Path, arg1: Path): boolean;
	move(arg0: Path, arg1: Path, arg2: Array<CopyOption>): void;
	newAsynchronousFileChannel(path: Path, options: any, executor: any, attrs: Array<FileAttribute>): AsynchronousFileChannel;
	newByteChannel(arg0: Path, arg1: any, arg2: Array<FileAttribute>): SeekableByteChannel;
	newDirectoryStream(arg0: Path, arg1: DirectoryStream$Filter): DirectoryStream;
	newFileChannel(path: Path, options: any, attrs: Array<FileAttribute>): FileChannel;
	newFileSystem(path: Path, env: any): FileSystem;
	newFileSystem(arg0: any, arg1: any): FileSystem;
	newInputStream(path: Path, options: Array<OpenOption>): InputStream;
	newOutputStream(path: Path, options: Array<OpenOption>): OutputStream;
	readAttributes(arg0: Path, arg1: any, arg2: Array<LinkOption>): BasicFileAttributes;
	readAttributes(arg0: Path, arg1: string, arg2: Array<LinkOption>): any;
	readSymbolicLink(link: Path): Path;
	setAttribute(arg0: Path, arg1: string, arg2: any, arg3: Array<LinkOption>): void;
}

export default class FileSystemProvider {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.spi.FileSystemProvider');
	}

	public static installedProviders(): Array<FileSystemProvider>;
	public static installedProviders(...args: any[]): any {
		return FileSystemProvider.$javaClass.installedProviders(...args);
	}

}

