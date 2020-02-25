declare var Java: any;

export default class ShardingKey {
	public static get $javaClass(): any {
		return Java.type('java.sql.ShardingKey');
	}

}

