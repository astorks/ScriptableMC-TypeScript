declare var Java: any;
import BaseComponent from './BaseComponent.js'
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js'
import ClickEvent from './ClickEvent.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'
import HoverEvent from './HoverEvent.js'

export default interface ScoreComponent extends BaseComponent {
	addExtra(component: BaseComponent): void;
	addExtra(text: string): void;
	copyFormatting(component: BaseComponent): void;
	copyFormatting(component: BaseComponent, replace: boolean): void;
	copyFormatting(component: BaseComponent, retention: ComponentBuilder$FormatRetention, replace: boolean): void;
	duplicate(): ScoreComponent;
	duplicate(): BaseComponent;
	duplicateWithoutFormatting(): BaseComponent;
	getClickEvent(): ClickEvent;
	getColor(): ChatColor;
	getColorRaw(): ChatColor;
	getExtra(): Array<BaseComponent>;
	getFont(): string;
	getFontRaw(): string;
	getHoverEvent(): HoverEvent;
	getInsertion(): string;
	getName(): string;
	getObjective(): string;
	getValue(): string;
	hasFormatting(): boolean;
	isBold(): boolean;
	isBoldRaw(): boolean;
	isItalic(): boolean;
	isItalicRaw(): boolean;
	isObfuscated(): boolean;
	isObfuscatedRaw(): boolean;
	isStrikethrough(): boolean;
	isStrikethroughRaw(): boolean;
	isUnderlined(): boolean;
	isUnderlinedRaw(): boolean;
	retain(retention: ComponentBuilder$FormatRetention): void;
	setBold(bold: boolean): void;
	setClickEvent(clickEvent: ClickEvent): void;
	setColor(color: ChatColor): void;
	setExtra(components: Array<any>): void;
	setFont(font: string): void;
	setHoverEvent(hoverEvent: HoverEvent): void;
	setInsertion(insertion: string): void;
	setItalic(italic: boolean): void;
	setName(_name: string): void;
	setObfuscated(obfuscated: boolean): void;
	setObjective(objective: string): void;
	setStrikethrough(strikethrough: boolean): void;
	setUnderlined(underlined: boolean): void;
	setValue(value: string): void;
	toLegacyText(): string;
	toPlainText(): string;
}

export default class ScoreComponent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ScoreComponent');
	}

	constructor(original: ScoreComponent);
	constructor(_name: string, objective: string);
	constructor(_name: string, objective: string, value: string);
	constructor(...args: any[]) {
		return new ScoreComponent.$javaClass(...args);
	}

	public static toLegacyText(components: Array<BaseComponent>): string;
	public static toLegacyText(...args: any[]): any {
		return ScoreComponent.$javaClass.toLegacyText(...args);
	}

	public static toPlainText(components: Array<BaseComponent>): string;
	public static toPlainText(...args: any[]): any {
		return ScoreComponent.$javaClass.toPlainText(...args);
	}

}

