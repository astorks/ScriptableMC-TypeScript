declare var Java: any;
import AttributeView from './AttributeView.js'

export default interface FileAttributeView {
	name(): string;
}

export default class FileAttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileAttributeView');
	}

}

