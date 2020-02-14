declare var Java: any;
import AttributeView from '../../../../java/nio/file/attribute/AttributeView.js'

export default interface FileStoreAttributeView {
	name(): string;
}

export default class FileStoreAttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileStoreAttributeView');
	}

}

