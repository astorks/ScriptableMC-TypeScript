declare var Java: any;
import File from '../../../../../java/io/File.js'
import FileFilter from '../../../../../java/io/FileFilter.js'
import FilenameFilter from '../../../../../java/io/FilenameFilter.js'

export default interface IOFileFilter {
	accept(arg0: File): boolean;
	accept(arg0: File, arg1: string): boolean;
}

export default class IOFileFilter {
	public static get $javaClass(): any {
		return Java.type('org.apache.commons.io.filefilter.IOFileFilter');
	}

}

