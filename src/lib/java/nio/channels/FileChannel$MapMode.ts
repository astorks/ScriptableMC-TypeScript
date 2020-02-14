declare var Java: any;

export default class FileChannel$MapMode {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.FileChannel$MapMode');
	}

	public static get PRIVATE(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.PRIVATE;
	}

	public static get READ_ONLY(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.READ_ONLY;
	}

	public static get READ_WRITE(): FileChannel$MapMode {
		return FileChannel$MapMode.$javaClass.READ_WRITE;
	}

}

