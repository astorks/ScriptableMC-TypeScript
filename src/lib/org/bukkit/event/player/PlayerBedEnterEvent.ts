declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Event$Result} from '../../../../org/bukkit/event/Event$Result.js'
import {PlayerBedEnterEvent$BedEnterResult} from '../../../../org/bukkit/event/player/PlayerBedEnterEvent$BedEnterResult.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	setCancelled(cancel: boolean): void;
	isCancelled(): boolean;
	setUseBed(useBed: Event$Result): void;
	getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
	getBed(): Block;
	useBed(): Event$Result;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBedEnterEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent');
	}
	constructor(who: Player, bed: Block);
	constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
	constructor(...args: any[]) {
		return new PlayerBedEnterEvent.$javaClass(...args);
	}
}

