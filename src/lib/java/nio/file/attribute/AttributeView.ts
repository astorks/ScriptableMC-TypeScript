declare var Java: any;

export default interface AttributeView {
	name(): string;
}

export default class AttributeView {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.AttributeView');
	}

}

