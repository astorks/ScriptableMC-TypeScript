export class PlayerArmorStandManipulateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerArmorStandManipulateEvent');
    }
    constructor(...args) {
        return new PlayerArmorStandManipulateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerArmorStandManipulateEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=PlayerArmorStandManipulateEvent.js.map