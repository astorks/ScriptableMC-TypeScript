declare var Java: any;
import FileTime from '../../../../java/nio/file/attribute/FileTime.js'

export default interface BasicFileAttributes {
	isSymbolicLink(): boolean;
	isRegularFile(): boolean;
	isOther(): boolean;
	fileKey(): any;
	lastModifiedTime(): FileTime;
	lastAccessTime(): FileTime;
	creationTime(): FileTime;
	size(): number;
	isDirectory(): boolean;
}

export default class BasicFileAttributes {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.BasicFileAttributes');
	}
}

