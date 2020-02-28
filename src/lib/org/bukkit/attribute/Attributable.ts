declare var Java: any;
import Attribute from './Attribute.js'
import AttributeInstance from './AttributeInstance.js'

export default interface Attributable {
	getAttribute(arg0: Attribute): AttributeInstance;
}

export default class Attributable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.Attributable');
	}

}

