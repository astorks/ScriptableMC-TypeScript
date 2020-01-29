export class ServicePriority {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.ServicePriority');
    }
    static get Lowest() {
        return this.$javaClass.Lowest;
    }
    static get Low() {
        return this.$javaClass.Low;
    }
    static get Normal() {
        return this.$javaClass.Normal;
    }
    static get High() {
        return this.$javaClass.High;
    }
    static get Highest() {
        return this.$javaClass.Highest;
    }
}
