declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Request from '../../khttp/requests/Request.js'

export default interface Response {
	getHeaders(): any;
	getConnection(): any;
	getCookies(): CookieJar;
	getUrl(): string;
	getRaw(): InputStream;
	getText(): string;
	getJsonObject(): any;
	getJsonArray(): any;
	setEncoding(arg0: Charset): void;
	contentIterator(arg0: number): any;
	lineIterator(arg0: number, arg1: Array<number>): any;
	getHistory(): Array<Response>;
	getRequest(): Request;
	getStatusCode(): number;
	getContent(): Array<number>;
	getEncoding(): Charset;
}

export default class Response {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.Response');
	}
}

