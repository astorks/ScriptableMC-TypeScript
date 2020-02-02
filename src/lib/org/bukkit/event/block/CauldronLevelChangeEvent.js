export default class CauldronLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent');
    }
    constructor(...args) {
        return new CauldronLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CauldronLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
