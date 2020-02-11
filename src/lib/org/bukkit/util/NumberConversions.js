export default class NumberConversions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.NumberConversions');
    }
    static isFinite(...args) {
        return NumberConversions.$javaClass.isFinite(...args);
    }
    static ceil(...args) {
        return NumberConversions.$javaClass.ceil(...args);
    }
    static floor(...args) {
        return NumberConversions.$javaClass.floor(...args);
    }
    static round(...args) {
        return NumberConversions.$javaClass.round(...args);
    }
    static toInt(...args) {
        return NumberConversions.$javaClass.toInt(...args);
    }
    static toDouble(...args) {
        return NumberConversions.$javaClass.toDouble(...args);
    }
    static toLong(...args) {
        return NumberConversions.$javaClass.toLong(...args);
    }
    static square(...args) {
        return NumberConversions.$javaClass.square(...args);
    }
    static toFloat(...args) {
        return NumberConversions.$javaClass.toFloat(...args);
    }
    static checkFinite(...args) {
        return NumberConversions.$javaClass.checkFinite(...args);
    }
    static toShort(...args) {
        return NumberConversions.$javaClass.toShort(...args);
    }
    static toByte(...args) {
        return NumberConversions.$javaClass.toByte(...args);
    }
}
