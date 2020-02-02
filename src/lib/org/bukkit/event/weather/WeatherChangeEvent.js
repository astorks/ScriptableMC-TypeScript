export default class WeatherChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.WeatherChangeEvent');
    }
    constructor(...args) {
        return new WeatherChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WeatherChangeEvent.$javaClass.getHandlerList(...args);
    }
}
