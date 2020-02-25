declare var Java: any;
import Charset from '../../../../java/nio/charset/Charset.js'
import File from '../../../../java/io/File.js'
import FileFilter from '../../../../java/io/FileFilter.js'
import FileInputStream from '../../../../java/io/FileInputStream.js'
import FileOutputStream from '../../../../java/io/FileOutputStream.js'
import IOFileFilter from '../../../../org/apache/commons/io/filefilter/IOFileFilter.js'
import InputStream from '../../../../java/io/InputStream.js'
import LineIterator from '../../../../org/apache/commons/io/LineIterator.js'
import OutputStream from '../../../../java/io/OutputStream.js'

export default class FileUtils {
	public static get $javaClass(): any {
		return Java.type('org.apache.commons.io.FileUtils');
	}

	constructor();
	constructor(...args: any[]) {
		return new FileUtils.$javaClass(...args);
	}

	public static get EMPTY_FILE_ARRAY(): Array<File> {
		return FileUtils.$javaClass.EMPTY_FILE_ARRAY;
	}

	public static get ONE_EB(): number {
		return FileUtils.$javaClass.ONE_EB;
	}

	public static get ONE_EB_BI(): any {
		return FileUtils.$javaClass.ONE_EB_BI;
	}

	public static get ONE_GB(): number {
		return FileUtils.$javaClass.ONE_GB;
	}

	public static get ONE_GB_BI(): any {
		return FileUtils.$javaClass.ONE_GB_BI;
	}

	public static get ONE_KB(): number {
		return FileUtils.$javaClass.ONE_KB;
	}

	public static get ONE_KB_BI(): any {
		return FileUtils.$javaClass.ONE_KB_BI;
	}

	public static get ONE_MB(): number {
		return FileUtils.$javaClass.ONE_MB;
	}

	public static get ONE_MB_BI(): any {
		return FileUtils.$javaClass.ONE_MB_BI;
	}

	public static get ONE_PB(): number {
		return FileUtils.$javaClass.ONE_PB;
	}

	public static get ONE_PB_BI(): any {
		return FileUtils.$javaClass.ONE_PB_BI;
	}

	public static get ONE_TB(): number {
		return FileUtils.$javaClass.ONE_TB;
	}

	public static get ONE_TB_BI(): any {
		return FileUtils.$javaClass.ONE_TB_BI;
	}

	public static get ONE_YB(): any {
		return FileUtils.$javaClass.ONE_YB;
	}

	public static get ONE_ZB(): any {
		return FileUtils.$javaClass.ONE_ZB;
	}

	public static byteCountToDisplaySize(size: number): string;
	public static byteCountToDisplaySize(size: any): string;
	public static byteCountToDisplaySize(...args: any[]): any {
		return FileUtils.$javaClass.byteCountToDisplaySize(...args);
	}

	public static checksum(file: File, checksum: any): any;
	public static checksum(...args: any[]): any {
		return FileUtils.$javaClass.checksum(...args);
	}

	public static checksumCRC32(file: File): number;
	public static checksumCRC32(...args: any[]): any {
		return FileUtils.$javaClass.checksumCRC32(...args);
	}

	public static cleanDirectory(directory: File): void;
	public static cleanDirectory(...args: any[]): any {
		return FileUtils.$javaClass.cleanDirectory(...args);
	}

	public static contentEquals(file1: File, file2: File): boolean;
	public static contentEquals(...args: any[]): any {
		return FileUtils.$javaClass.contentEquals(...args);
	}

	public static contentEqualsIgnoreEOL(file1: File, file2: File, charsetName: string): boolean;
	public static contentEqualsIgnoreEOL(...args: any[]): any {
		return FileUtils.$javaClass.contentEqualsIgnoreEOL(...args);
	}

	public static convertFileCollectionToFileArray(files: any): Array<File>;
	public static convertFileCollectionToFileArray(...args: any[]): any {
		return FileUtils.$javaClass.convertFileCollectionToFileArray(...args);
	}

	public static copyDirectory(srcDir: File, destDir: File): void;
	public static copyDirectory(srcDir: File, destDir: File, preserveFileDate: boolean): void;
	public static copyDirectory(srcDir: File, destDir: File, filter: FileFilter): void;
	public static copyDirectory(srcDir: File, destDir: File, filter: FileFilter, preserveFileDate: boolean): void;
	public static copyDirectory(...args: any[]): any {
		return FileUtils.$javaClass.copyDirectory(...args);
	}

	public static copyDirectoryToDirectory(srcDir: File, destDir: File): void;
	public static copyDirectoryToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.copyDirectoryToDirectory(...args);
	}

	public static copyFile(input: File, output: OutputStream): number;
	public static copyFile(srcFile: File, destFile: File): void;
	public static copyFile(srcFile: File, destFile: File, preserveFileDate: boolean): void;
	public static copyFile(...args: any[]): any {
		return FileUtils.$javaClass.copyFile(...args);
	}

	public static copyFileToDirectory(srcFile: File, destDir: File): void;
	public static copyFileToDirectory(srcFile: File, destDir: File, preserveFileDate: boolean): void;
	public static copyFileToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.copyFileToDirectory(...args);
	}

	public static copyInputStreamToFile(source: InputStream, destination: File): void;
	public static copyInputStreamToFile(...args: any[]): any {
		return FileUtils.$javaClass.copyInputStreamToFile(...args);
	}

	public static copyToDirectory(srcs: any, destDir: File): void;
	public static copyToDirectory(src: File, destDir: File): void;
	public static copyToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.copyToDirectory(...args);
	}

	public static copyToFile(source: InputStream, destination: File): void;
	public static copyToFile(...args: any[]): any {
		return FileUtils.$javaClass.copyToFile(...args);
	}

	public static copyURLToFile(source: any, destination: File): void;
	public static copyURLToFile(source: any, destination: File, connectionTimeout: number, readTimeout: number): void;
	public static copyURLToFile(...args: any[]): any {
		return FileUtils.$javaClass.copyURLToFile(...args);
	}

	public static deleteDirectory(directory: File): void;
	public static deleteDirectory(...args: any[]): any {
		return FileUtils.$javaClass.deleteDirectory(...args);
	}

	public static deleteQuietly(file: File): boolean;
	public static deleteQuietly(...args: any[]): any {
		return FileUtils.$javaClass.deleteQuietly(...args);
	}

	public static directoryContains(directory: File, child: File): boolean;
	public static directoryContains(...args: any[]): any {
		return FileUtils.$javaClass.directoryContains(...args);
	}

	public static forceDelete(file: File): void;
	public static forceDelete(...args: any[]): any {
		return FileUtils.$javaClass.forceDelete(...args);
	}

	public static forceDeleteOnExit(file: File): void;
	public static forceDeleteOnExit(...args: any[]): any {
		return FileUtils.$javaClass.forceDeleteOnExit(...args);
	}

	public static forceMkdir(directory: File): void;
	public static forceMkdir(...args: any[]): any {
		return FileUtils.$javaClass.forceMkdir(...args);
	}

	public static forceMkdirParent(file: File): void;
	public static forceMkdirParent(...args: any[]): any {
		return FileUtils.$javaClass.forceMkdirParent(...args);
	}

	public static getFile(names: Array<string>): File;
	public static getFile(directory: File, names: Array<string>): File;
	public static getFile(...args: any[]): any {
		return FileUtils.$javaClass.getFile(...args);
	}

	public static getTempDirectory(): File;
	public static getTempDirectory(...args: any[]): any {
		return FileUtils.$javaClass.getTempDirectory(...args);
	}

	public static getTempDirectoryPath(): string;
	public static getTempDirectoryPath(...args: any[]): any {
		return FileUtils.$javaClass.getTempDirectoryPath(...args);
	}

	public static getUserDirectory(): File;
	public static getUserDirectory(...args: any[]): any {
		return FileUtils.$javaClass.getUserDirectory(...args);
	}

	public static getUserDirectoryPath(): string;
	public static getUserDirectoryPath(...args: any[]): any {
		return FileUtils.$javaClass.getUserDirectoryPath(...args);
	}

	public static isFileNewer(file: File, date: any): boolean;
	public static isFileNewer(file: File, timeMillis: number): boolean;
	public static isFileNewer(file: File, reference: File): boolean;
	public static isFileNewer(...args: any[]): any {
		return FileUtils.$javaClass.isFileNewer(...args);
	}

	public static isFileOlder(file: File, reference: File): boolean;
	public static isFileOlder(file: File, date: any): boolean;
	public static isFileOlder(file: File, timeMillis: number): boolean;
	public static isFileOlder(...args: any[]): any {
		return FileUtils.$javaClass.isFileOlder(...args);
	}

	public static isSymlink(file: File): boolean;
	public static isSymlink(...args: any[]): any {
		return FileUtils.$javaClass.isSymlink(...args);
	}

	public static iterateFiles(directory: File, extensions: Array<string>, recursive: boolean): any;
	public static iterateFiles(directory: File, fileFilter: IOFileFilter, dirFilter: IOFileFilter): any;
	public static iterateFiles(...args: any[]): any {
		return FileUtils.$javaClass.iterateFiles(...args);
	}

	public static iterateFilesAndDirs(directory: File, fileFilter: IOFileFilter, dirFilter: IOFileFilter): any;
	public static iterateFilesAndDirs(...args: any[]): any {
		return FileUtils.$javaClass.iterateFilesAndDirs(...args);
	}

	public static lineIterator(file: File): LineIterator;
	public static lineIterator(file: File, encoding: string): LineIterator;
	public static lineIterator(...args: any[]): any {
		return FileUtils.$javaClass.lineIterator(...args);
	}

	public static listFiles(directory: File, extensions: Array<string>, recursive: boolean): any;
	public static listFiles(directory: File, fileFilter: IOFileFilter, dirFilter: IOFileFilter): any;
	public static listFiles(...args: any[]): any {
		return FileUtils.$javaClass.listFiles(...args);
	}

	public static listFilesAndDirs(directory: File, fileFilter: IOFileFilter, dirFilter: IOFileFilter): any;
	public static listFilesAndDirs(...args: any[]): any {
		return FileUtils.$javaClass.listFilesAndDirs(...args);
	}

	public static moveDirectory(srcDir: File, destDir: File): void;
	public static moveDirectory(...args: any[]): any {
		return FileUtils.$javaClass.moveDirectory(...args);
	}

	public static moveDirectoryToDirectory(src: File, destDir: File, createDestDir: boolean): void;
	public static moveDirectoryToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.moveDirectoryToDirectory(...args);
	}

	public static moveFile(srcFile: File, destFile: File): void;
	public static moveFile(...args: any[]): any {
		return FileUtils.$javaClass.moveFile(...args);
	}

	public static moveFileToDirectory(srcFile: File, destDir: File, createDestDir: boolean): void;
	public static moveFileToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.moveFileToDirectory(...args);
	}

	public static moveToDirectory(src: File, destDir: File, createDestDir: boolean): void;
	public static moveToDirectory(...args: any[]): any {
		return FileUtils.$javaClass.moveToDirectory(...args);
	}

	public static openInputStream(file: File): FileInputStream;
	public static openInputStream(...args: any[]): any {
		return FileUtils.$javaClass.openInputStream(...args);
	}

	public static openOutputStream(file: File): FileOutputStream;
	public static openOutputStream(file: File, append: boolean): FileOutputStream;
	public static openOutputStream(...args: any[]): any {
		return FileUtils.$javaClass.openOutputStream(...args);
	}

	public static readFileToByteArray(file: File): Array<number>;
	public static readFileToByteArray(...args: any[]): any {
		return FileUtils.$javaClass.readFileToByteArray(...args);
	}

	public static readFileToString(file: File): string;
	public static readFileToString(file: File, encoding: Charset): string;
	public static readFileToString(file: File, encoding: string): string;
	public static readFileToString(...args: any[]): any {
		return FileUtils.$javaClass.readFileToString(...args);
	}

	public static readLines(file: File): Array<string>;
	public static readLines(file: File, encoding: Charset): Array<string>;
	public static readLines(file: File, encoding: string): Array<string>;
	public static readLines(...args: any[]): any {
		return FileUtils.$javaClass.readLines(...args);
	}

	public static sizeOf(file: File): number;
	public static sizeOf(...args: any[]): any {
		return FileUtils.$javaClass.sizeOf(...args);
	}

	public static sizeOfAsBigInteger(file: File): any;
	public static sizeOfAsBigInteger(...args: any[]): any {
		return FileUtils.$javaClass.sizeOfAsBigInteger(...args);
	}

	public static sizeOfDirectory(directory: File): number;
	public static sizeOfDirectory(...args: any[]): any {
		return FileUtils.$javaClass.sizeOfDirectory(...args);
	}

	public static sizeOfDirectoryAsBigInteger(directory: File): any;
	public static sizeOfDirectoryAsBigInteger(...args: any[]): any {
		return FileUtils.$javaClass.sizeOfDirectoryAsBigInteger(...args);
	}

	public static toFile(url: any): File;
	public static toFile(...args: any[]): any {
		return FileUtils.$javaClass.toFile(...args);
	}

	public static toFiles(urls: Array<any>): Array<File>;
	public static toFiles(...args: any[]): any {
		return FileUtils.$javaClass.toFiles(...args);
	}

	public static toURLs(files: Array<File>): Array<any>;
	public static toURLs(...args: any[]): any {
		return FileUtils.$javaClass.toURLs(...args);
	}

	public static touch(file: File): void;
	public static touch(...args: any[]): any {
		return FileUtils.$javaClass.touch(...args);
	}

	public static waitFor(file: File, seconds: number): boolean;
	public static waitFor(...args: any[]): any {
		return FileUtils.$javaClass.waitFor(...args);
	}

	public static write(file: File, data: any): void;
	public static write(file: File, data: any, encoding: string): void;
	public static write(file: File, data: any, encoding: Charset): void;
	public static write(file: File, data: any, append: boolean): void;
	public static write(file: File, data: any, encoding: string, append: boolean): void;
	public static write(file: File, data: any, encoding: Charset, append: boolean): void;
	public static write(...args: any[]): any {
		return FileUtils.$javaClass.write(...args);
	}

	public static writeByteArrayToFile(file: File, data: Array<number>): void;
	public static writeByteArrayToFile(file: File, data: Array<number>, append: boolean): void;
	public static writeByteArrayToFile(file: File, data: Array<number>, off: number, len: number): void;
	public static writeByteArrayToFile(file: File, data: Array<number>, off: number, len: number, append: boolean): void;
	public static writeByteArrayToFile(...args: any[]): any {
		return FileUtils.$javaClass.writeByteArrayToFile(...args);
	}

	public static writeLines(file: File, lines: any): void;
	public static writeLines(file: File, lines: any, lineEnding: string): void;
	public static writeLines(file: File, lines: any, append: boolean): void;
	public static writeLines(file: File, encoding: string, lines: any): void;
	public static writeLines(file: File, encoding: string, lines: any, lineEnding: string): void;
	public static writeLines(file: File, lines: any, lineEnding: string, append: boolean): void;
	public static writeLines(file: File, encoding: string, lines: any, append: boolean): void;
	public static writeLines(file: File, encoding: string, lines: any, lineEnding: string, append: boolean): void;
	public static writeLines(...args: any[]): any {
		return FileUtils.$javaClass.writeLines(...args);
	}

	public static writeStringToFile(file: File, data: string): void;
	public static writeStringToFile(file: File, data: string, append: boolean): void;
	public static writeStringToFile(file: File, data: string, encoding: Charset): void;
	public static writeStringToFile(file: File, data: string, encoding: string): void;
	public static writeStringToFile(file: File, data: string, encoding: Charset, append: boolean): void;
	public static writeStringToFile(file: File, data: string, encoding: string, append: boolean): void;
	public static writeStringToFile(...args: any[]): any {
		return FileUtils.$javaClass.writeStringToFile(...args);
	}

}

