export default class ShardingKey {
    static get $javaClass() {
        return Java.type('java.sql.ShardingKey');
    }
}
