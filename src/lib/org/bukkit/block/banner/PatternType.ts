declare var Java: any;

export default interface PatternType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getIdentifier(): string;
	name(): string;
	ordinal(): number;
}

export default class PatternType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.banner.PatternType');
	}

	public static get BASE(): PatternType {
		return this.$javaClass.BASE;
	}
	public static get BORDER(): PatternType {
		return this.$javaClass.BORDER;
	}
	public static get BRICKS(): PatternType {
		return this.$javaClass.BRICKS;
	}
	public static get CIRCLE_MIDDLE(): PatternType {
		return this.$javaClass.CIRCLE_MIDDLE;
	}
	public static get CREEPER(): PatternType {
		return this.$javaClass.CREEPER;
	}
	public static get CROSS(): PatternType {
		return this.$javaClass.CROSS;
	}
	public static get CURLY_BORDER(): PatternType {
		return this.$javaClass.CURLY_BORDER;
	}
	public static get DIAGONAL_LEFT(): PatternType {
		return this.$javaClass.DIAGONAL_LEFT;
	}
	public static get DIAGONAL_LEFT_MIRROR(): PatternType {
		return this.$javaClass.DIAGONAL_LEFT_MIRROR;
	}
	public static get DIAGONAL_RIGHT(): PatternType {
		return this.$javaClass.DIAGONAL_RIGHT;
	}
	public static get DIAGONAL_RIGHT_MIRROR(): PatternType {
		return this.$javaClass.DIAGONAL_RIGHT_MIRROR;
	}
	public static get FLOWER(): PatternType {
		return this.$javaClass.FLOWER;
	}
	public static get GLOBE(): PatternType {
		return this.$javaClass.GLOBE;
	}
	public static get GRADIENT(): PatternType {
		return this.$javaClass.GRADIENT;
	}
	public static get GRADIENT_UP(): PatternType {
		return this.$javaClass.GRADIENT_UP;
	}
	public static get HALF_HORIZONTAL(): PatternType {
		return this.$javaClass.HALF_HORIZONTAL;
	}
	public static get HALF_HORIZONTAL_MIRROR(): PatternType {
		return this.$javaClass.HALF_HORIZONTAL_MIRROR;
	}
	public static get HALF_VERTICAL(): PatternType {
		return this.$javaClass.HALF_VERTICAL;
	}
	public static get HALF_VERTICAL_MIRROR(): PatternType {
		return this.$javaClass.HALF_VERTICAL_MIRROR;
	}
	public static get MOJANG(): PatternType {
		return this.$javaClass.MOJANG;
	}
	public static get RHOMBUS_MIDDLE(): PatternType {
		return this.$javaClass.RHOMBUS_MIDDLE;
	}
	public static get SKULL(): PatternType {
		return this.$javaClass.SKULL;
	}
	public static get SQUARE_BOTTOM_LEFT(): PatternType {
		return this.$javaClass.SQUARE_BOTTOM_LEFT;
	}
	public static get SQUARE_BOTTOM_RIGHT(): PatternType {
		return this.$javaClass.SQUARE_BOTTOM_RIGHT;
	}
	public static get SQUARE_TOP_LEFT(): PatternType {
		return this.$javaClass.SQUARE_TOP_LEFT;
	}
	public static get SQUARE_TOP_RIGHT(): PatternType {
		return this.$javaClass.SQUARE_TOP_RIGHT;
	}
	public static get STRAIGHT_CROSS(): PatternType {
		return this.$javaClass.STRAIGHT_CROSS;
	}
	public static get STRIPE_BOTTOM(): PatternType {
		return this.$javaClass.STRIPE_BOTTOM;
	}
	public static get STRIPE_CENTER(): PatternType {
		return this.$javaClass.STRIPE_CENTER;
	}
	public static get STRIPE_DOWNLEFT(): PatternType {
		return this.$javaClass.STRIPE_DOWNLEFT;
	}
	public static get STRIPE_DOWNRIGHT(): PatternType {
		return this.$javaClass.STRIPE_DOWNRIGHT;
	}
	public static get STRIPE_LEFT(): PatternType {
		return this.$javaClass.STRIPE_LEFT;
	}
	public static get STRIPE_MIDDLE(): PatternType {
		return this.$javaClass.STRIPE_MIDDLE;
	}
	public static get STRIPE_RIGHT(): PatternType {
		return this.$javaClass.STRIPE_RIGHT;
	}
	public static get STRIPE_SMALL(): PatternType {
		return this.$javaClass.STRIPE_SMALL;
	}
	public static get STRIPE_TOP(): PatternType {
		return this.$javaClass.STRIPE_TOP;
	}
	public static get TRIANGLES_BOTTOM(): PatternType {
		return this.$javaClass.TRIANGLES_BOTTOM;
	}
	public static get TRIANGLES_TOP(): PatternType {
		return this.$javaClass.TRIANGLES_TOP;
	}
	public static get TRIANGLE_BOTTOM(): PatternType {
		return this.$javaClass.TRIANGLE_BOTTOM;
	}
	public static get TRIANGLE_TOP(): PatternType {
		return this.$javaClass.TRIANGLE_TOP;
	}
}

