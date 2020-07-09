declare var Java: any;
import BaseComponent from './BaseComponent.js'
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js'
import ClickEvent from './ClickEvent.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'
import ComponentBuilder$Joiner from './ComponentBuilder$Joiner.js'
import HoverEvent from './HoverEvent.js'

export default interface ComponentBuilder {
	append(text: string): ComponentBuilder;
	append(joiner: ComponentBuilder$Joiner): ComponentBuilder;
	append(component: BaseComponent): ComponentBuilder;
	append(components: Array<BaseComponent>): ComponentBuilder;
	append(text: string, retention: ComponentBuilder$FormatRetention): ComponentBuilder;
	append(components: Array<BaseComponent>, retention: ComponentBuilder$FormatRetention): ComponentBuilder;
	append(joiner: ComponentBuilder$Joiner, retention: ComponentBuilder$FormatRetention): ComponentBuilder;
	append(component: BaseComponent, retention: ComponentBuilder$FormatRetention): ComponentBuilder;
	appendLegacy(text: string): ComponentBuilder;
	bold(bold: boolean): ComponentBuilder;
	color(color: ChatColor): ComponentBuilder;
	create(): Array<BaseComponent>;
	event(hoverEvent: HoverEvent): ComponentBuilder;
	event(clickEvent: ClickEvent): ComponentBuilder;
	getComponent(pos: number): BaseComponent;
	getCurrentComponent(): BaseComponent;
	getCursor(): number;
	getParts(): Array<BaseComponent>;
	insertion(insertion: string): ComponentBuilder;
	italic(italic: boolean): ComponentBuilder;
	obfuscated(obfuscated: boolean): ComponentBuilder;
	removeComponent(pos: number): void;
	reset(): ComponentBuilder;
	resetCursor(): ComponentBuilder;
	retain(retention: ComponentBuilder$FormatRetention): ComponentBuilder;
	setCursor(pos: number): ComponentBuilder;
	strikethrough(strikethrough: boolean): ComponentBuilder;
	underlined(underlined: boolean): ComponentBuilder;
}

export default class ComponentBuilder {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ComponentBuilder');
	}

	constructor();
	constructor(component: BaseComponent);
	constructor(text: string);
	constructor(original: ComponentBuilder);
	constructor(...args: any[]) {
		return new ComponentBuilder.$javaClass(...args);
	}

}

