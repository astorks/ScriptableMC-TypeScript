declare var Java: any;
import Path from './Path.js'

export default interface PathMatcher {
	matches(arg0: Path): boolean;
}

export default class PathMatcher {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.PathMatcher');
	}

}

