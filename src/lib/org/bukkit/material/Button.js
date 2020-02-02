export default class Button {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Button');
    }
    constructor(...args) {
        return new Button.$javaClass(...args);
    }
}
