declare var Java: any;
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeInstance from '../../../org/bukkit/attribute/AttributeInstance.js'

export default interface Attributable {
	getAttribute(arg0: Attribute): AttributeInstance;
}

export default class Attributable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.Attributable');
	}

}

