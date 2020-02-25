declare var Java: any;
import Closeable from '../../../java/io/Closeable.js'

export default interface Channel {
	close(): void;
	isOpen(): boolean;
}

export default class Channel {
	public static get $javaClass(): any {
		return Java.type('java.nio.channels.Channel');
	}

}

