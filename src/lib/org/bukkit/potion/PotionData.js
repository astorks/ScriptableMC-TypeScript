export class PotionData {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionData');
    }
    constructor(...args) {
        return new PotionData.$javaClass(...args);
    }
}
//# sourceMappingURL=PotionData.js.map