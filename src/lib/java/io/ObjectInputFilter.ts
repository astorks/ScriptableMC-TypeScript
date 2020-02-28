declare var Java: any;
import ObjectInputFilter$FilterInfo from './ObjectInputFilter$FilterInfo.js'
import ObjectInputFilter$Status from './ObjectInputFilter$Status.js'

export default interface ObjectInputFilter {
	checkInput(arg0: ObjectInputFilter$FilterInfo): ObjectInputFilter$Status;
}

export default class ObjectInputFilter {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputFilter');
	}

}

