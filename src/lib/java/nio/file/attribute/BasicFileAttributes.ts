declare var Java: any;
import FileTime from '../../../../java/nio/file/attribute/FileTime.js'

export default interface BasicFileAttributes {
	creationTime(): FileTime;
	fileKey(): any;
	isDirectory(): boolean;
	isOther(): boolean;
	isRegularFile(): boolean;
	isSymbolicLink(): boolean;
	lastAccessTime(): FileTime;
	lastModifiedTime(): FileTime;
	size(): number;
}

export default class BasicFileAttributes {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.BasicFileAttributes');
	}

}

