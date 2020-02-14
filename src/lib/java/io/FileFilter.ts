declare var Java: any;
import File from '../../java/io/File.js'

export default interface FileFilter {
	accept(arg0: File): boolean;
}

export default class FileFilter {
	public static get $javaClass(): any {
		return Java.type('java.io.FileFilter');
	}

}

