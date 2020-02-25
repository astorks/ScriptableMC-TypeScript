declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Request from '../../khttp/requests/Request.js'

export default interface Response {
	contentIterator(arg0: number): any;
	getConnection(): any;
	getContent(): Array<number>;
	getCookies(): CookieJar;
	getEncoding(): Charset;
	getHeaders(): any;
	getHistory(): Array<Response>;
	getJsonArray(): any;
	getJsonObject(): any;
	getRaw(): InputStream;
	getRequest(): Request;
	getStatusCode(): number;
	getText(): string;
	getUrl(): string;
	lineIterator(arg0: number, arg1: Array<number>): any;
	setEncoding(arg0: Charset): void;
}

export default class Response {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.Response');
	}

}

