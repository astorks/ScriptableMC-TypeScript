export default class PressureSensor {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PressureSensor');
    }
}
