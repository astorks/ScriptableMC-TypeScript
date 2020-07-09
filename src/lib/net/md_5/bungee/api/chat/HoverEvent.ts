declare var Java: any;
import BaseComponent from './BaseComponent.js'
import HoverEvent$Action from './HoverEvent$Action.js'

export default interface HoverEvent {
	getAction(): HoverEvent$Action;
	getValue(): Array<BaseComponent>;
}

export default class HoverEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent');
	}

	constructor(action: HoverEvent$Action, value: Array<BaseComponent>);
	constructor(...args: any[]) {
		return new HoverEvent.$javaClass(...args);
	}

}

