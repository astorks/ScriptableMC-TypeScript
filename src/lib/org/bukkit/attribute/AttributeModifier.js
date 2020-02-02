export default class AttributeModifier {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.AttributeModifier');
    }
    constructor(...args) {
        return new AttributeModifier.$javaClass(...args);
    }
    static deserialize(...args) {
        return AttributeModifier.$javaClass.deserialize(...args);
    }
}
