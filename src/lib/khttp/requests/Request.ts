declare var Java: any;
import Authorization from '../../khttp/structures/authorization/Authorization.js'
import FileLike from '../../khttp/structures/files/FileLike.js'

export default interface Request {
	getHeaders(): any;
	getCookies(): any;
	getBody(): Array<number>;
	getData(): any;
	getUrl(): string;
	getAllowRedirects(): boolean;
	getFiles(): Array<FileLike>;
	getParams(): any;
	getJson(): any;
	getAuth(): Authorization;
	getTimeout(): number;
	getStream(): boolean;
	getMethod(): string;
}

export default class Request {
	public static get $javaClass(): any {
		return Java.type('khttp.requests.Request');
	}
}

