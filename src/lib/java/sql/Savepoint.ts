declare var Java: any;

export default interface Savepoint {
	getSavepointId(): number;
	getSavepointName(): string;
}

export default class Savepoint {
	public static get $javaClass(): any {
		return Java.type('java.sql.Savepoint');
	}

}

