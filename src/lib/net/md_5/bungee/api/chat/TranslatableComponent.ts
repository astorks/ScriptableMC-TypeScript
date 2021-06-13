declare var Java: any;
import BaseComponent from './BaseComponent.js'
import ChatColor from '../../../../../net/md_5/bungee/api/ChatColor.js'
import ClickEvent from './ClickEvent.js'
import ComponentBuilder$FormatRetention from './ComponentBuilder$FormatRetention.js'
import HoverEvent from './HoverEvent.js'

export default interface TranslatableComponent extends BaseComponent {
	addExtra(component: BaseComponent): void;
	addExtra(text: string): void;
	addWith(component: BaseComponent): void;
	addWith(text: string): void;
	copyFormatting(component: BaseComponent): void;
	copyFormatting(component: BaseComponent, replace: boolean): void;
	copyFormatting(component: BaseComponent, retention: ComponentBuilder$FormatRetention, replace: boolean): void;
	duplicate(): BaseComponent;
	duplicate(): TranslatableComponent;
	duplicateWithoutFormatting(): BaseComponent;
	getClickEvent(): ClickEvent;
	getColor(): ChatColor;
	getColorRaw(): ChatColor;
	getExtra(): Array<BaseComponent>;
	getFont(): string;
	getFontRaw(): string;
	getFormat(): any;
	getHoverEvent(): HoverEvent;
	getInsertion(): string;
	getTranslate(): string;
	getWith(): Array<BaseComponent>;
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
	setObfuscated(obfuscated: boolean): void;
	setStrikethrough(strikethrough: boolean): void;
	setTranslate(translate: string): void;
	setUnderlined(underlined: boolean): void;
	setWith(components: Array<any>): void;
	toLegacyText(): string;
	toPlainText(): string;
}

export default class TranslatableComponent {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.TranslatableComponent');
	}

	constructor();
	constructor(original: TranslatableComponent);
	constructor(translate: string, _with: Array<any>);
	constructor(...args: any[]) {
		return new TranslatableComponent.$javaClass(...args);
	}

	public static toLegacyText(components: Array<BaseComponent>): string;
	public static toLegacyText(...args: any[]): any {
		return TranslatableComponent.$javaClass.toLegacyText(...args);
	}

	public static toPlainText(components: Array<BaseComponent>): string;
	public static toPlainText(...args: any[]): any {
		return TranslatableComponent.$javaClass.toPlainText(...args);
	}

}

