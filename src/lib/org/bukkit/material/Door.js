export default class Door {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Door');
    }
    constructor(...args) {
        return new Door.$javaClass(...args);
    }
    static getWoodDoorOfSpecies(...args) {
        return Door.$javaClass.getWoodDoorOfSpecies(...args);
    }
}
