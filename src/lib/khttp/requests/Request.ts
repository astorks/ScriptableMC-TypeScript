declare var Java: any;
import Authorization from '../../khttp/structures/authorization/Authorization.js'
import FileLike from '../../khttp/structures/files/FileLike.js'

export default interface Request {
	getAllowRedirects(): boolean;
	getAuth(): Authorization;
	getBody(): Array<number>;
	getCookies(): any;
	getData(): any;
	getFiles(): Array<FileLike>;
	getHeaders(): any;
	getJson(): any;
	getMethod(): string;
	getParams(): any;
	getStream(): boolean;
	getTimeout(): number;
	getUrl(): string;
}

export default class Request {
	public static get $javaClass(): any {
		return Java.type('khttp.requests.Request');
	}

}

