declare var Java: any;
import File from '../../java/io/File.js'

export default interface FilenameFilter {
	accept(arg0: File, arg1: string): boolean;
}

export default class FilenameFilter {
	public static get $javaClass(): any {
		return Java.type('java.io.FilenameFilter');
	}

}

