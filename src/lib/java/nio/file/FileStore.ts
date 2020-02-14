declare var Java: any;
import FileStoreAttributeView from '../../../java/nio/file/attribute/FileStoreAttributeView.js'

export default interface FileStore {
	getUnallocatedSpace(): number;
	supportsFileAttributeView(arg0: any): boolean;
	supportsFileAttributeView(arg0: string): boolean;
	getFileStoreAttributeView(arg0: any): FileStoreAttributeView;
	getAttribute(arg0: string): any;
	name(): string;
	type(): string;
	getTotalSpace(): number;
	getUsableSpace(): number;
	isReadOnly(): boolean;
}

export default class FileStore {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.FileStore');
	}
}

