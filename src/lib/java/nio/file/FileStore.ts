declare var Java: any;
import FileStoreAttributeView from '../../../java/nio/file/attribute/FileStoreAttributeView.js'

export default interface FileStore {
	getAttribute(arg0: string): any;
	getBlockSize(): number;
	getFileStoreAttributeView(arg0: any): FileStoreAttributeView;
	getTotalSpace(): number;
	getUnallocatedSpace(): number;
	getUsableSpace(): number;
	isReadOnly(): boolean;
	name(): string;
	supportsFileAttributeView(arg0: any): boolean;
	supportsFileAttributeView(arg0: string): boolean;
	type(): string;
}

export default class FileStore {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.FileStore');
	}

}

