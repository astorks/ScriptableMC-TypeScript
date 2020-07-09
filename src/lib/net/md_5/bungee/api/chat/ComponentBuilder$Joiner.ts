declare var Java: any;
import ComponentBuilder from './ComponentBuilder.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'

export default interface ComponentBuilder$Joiner {
	join(arg0: ComponentBuilder, arg1: ComponentBuilder$FormatRetention): ComponentBuilder;
}

export default class ComponentBuilder$Joiner {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ComponentBuilder$Joiner');
	}

}

