declare var Java: any;
import Location from './Location.js'
import Vibration$Destination from './Vibration$Destination.js'

export default interface Vibration {
	getArrivalTime(): number;
	getDestination(): Vibration$Destination;
	getOrigin(): Location;
}

export default class Vibration {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Vibration');
	}

	constructor(origin: Location, destination: Vibration$Destination, arrivalTime: number);
	constructor(...args: any[]) {
		return new Vibration.$javaClass(...args);
	}

}

