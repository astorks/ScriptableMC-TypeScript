declare var Java: any;
import BaseComponent from './BaseComponent.js'
import Content from './hover/content/Content.js'
import HoverEvent$Action from './HoverEvent$Action.js'

export default interface HoverEvent {
	addContent(content: Content): void;
	getAction(): HoverEvent$Action;
	getContents(): Array<Content>;
	getValue(): Array<BaseComponent>;
	isLegacy(): boolean;
	setLegacy(legacy: boolean): void;
}

export default class HoverEvent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent');
	}

	constructor(action: HoverEvent$Action, contents: Array<Content>);
	constructor(action: HoverEvent$Action, value: Array<BaseComponent>);
	constructor(action: HoverEvent$Action, contents: Array<any>);
	constructor(...args: any[]) {
		return new HoverEvent.$javaClass(...args);
	}

}

