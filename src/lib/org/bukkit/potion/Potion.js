export default class Potion {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.Potion');
    }
    constructor(...args) {
        return new Potion.$javaClass(...args);
    }
    static getBrewer(...args) {
        return Potion.$javaClass.getBrewer(...args);
    }
    static fromDamage(...args) {
        return Potion.$javaClass.fromDamage(...args);
    }
    static fromItemStack(...args) {
        return Potion.$javaClass.fromItemStack(...args);
    }
    static setPotionBrewer(...args) {
        return Potion.$javaClass.setPotionBrewer(...args);
    }
}
