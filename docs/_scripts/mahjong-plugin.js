class Tile {
	constructor(kind, modifier) {
		this.kind = kind;
		this.modifier = modifier;
	}
}

_TILE_BACK_COLOUR = "#f4982a";
_TILE_BACKGROUND_COLOUR = "#ffffff";

function renderMahjongSvg(position, notation) {
	const tiles = _parse(notation);

	return tiles.map(tile => {
		const background = tile.kind === "0z"
			? _TILE_BACK_COLOUR
			: _TILE_BACKGROUND_COLOUR;

		return _svgTemplate(position, tile.kind, tile.modifier, background);
	}).join("");
}

function _svgTemplate(position, tile, modifier, background) {
	if (tile === "8z") {
		return `<svg viewBox="0 0 1 1" width="0.75em" height="1"></svg>`;
	}

	if (modifier === "=") {
		return `
			<svg class="tile-${position}--stacked" viewBox="0 0 36 57">
				<svg viewBox="0 0 36 27" x="0" y="0" width="100%" height="50%">
					<rect width="100%" height="100%" rx="4" ry="4" fill="${background}" />
					<use href="_images/mj.svg#${tile}" x="5.5" y="-4" width="25" height="35" transform="rotate(-90, 18, 13.5)"/>
				</svg>
				<svg viewBox="0 0 36 27" x="0" y="30" width="100%" height="50%">
					<rect width="100%" height="100%" rx="4" ry="4" fill="${background}" />
					<use href="_images/mj.svg#${tile}" x="5.5" y="-4" width="25" height="35" transform="rotate(-90, 18, 13.5)"/>
				</svg>
			</svg>
		`;
	}

	if (modifier === "-") {
		return `
			<svg class="tile-${position}--rotated" viewBox="0 0 36 27">
				<rect width="100%" height="100%" rx="4" ry="4" fill="${background}" />
				<use href="_images/mj.svg#${tile}" x="5.5" y="-4" width="25" height="35" transform="rotate(-90, 18, 13.5)"/>
			</svg>
		`;
	}

	return `
		<svg class="tile-${position}" viewBox="0 0 27 36">
			<rect width="100%" height="100%" rx="4" ry="4" fill="${background}" />
			<use href="_images/mj.svg#${tile}" x="1" y="1" width="25" height="35" />
		</svg>
	`;
}

/**
 * Parses mahjong notation into `Tile[]`.
 *
 * Syntax of the notation:
 *   - m: manzu, p: pinzu, s: souzu, z: jihai
 *   - 0m, 0p, 0s are the red versions of 5m, 5p and 5s
 *   - 0z is the back of the tile
 *   - dashes/single quotes indicate a rotated tile
 *   - equal signs/double quotes indicate an added kan
 *   - underscores indicate a spacer, represented by an "8z" tile
 *   - whitespace is ignored
 *
 * Example:
 *
 * ```
 * parse("66=6s_777-z")
 *
 * [
 *   Tile("6s", modifier = null),
 *   Tile("6s", modifier = "="),
 *   Tile("6s", modifier = null),
 *   Tile("8z", modifier = null),
 *   Tile("7z", modifier = null),
 *   Tile("7z", modifier = null),
 *   Tile("7z", modifier = "-"),
 * ]
 * ```
 */
function _parse(notation) {
	const tiles = [];
	const digits = [];

	notation = notation.replace(/\s/g, "");

	for (let i = 0; i < notation.length; i++) {
		let c = notation[i];

		// normalise ' into - and " into =
		if (c === "'") {
			c = "-";
		} else if (c === "\"") {
			c = "=";
		}

		if (c >= "0" && c <= "9") {
			digits.push({ digit: c, modifier: null });
		} else if ("mpsz".includes(c)) {
			for (const d of digits) {
				tiles.push(new Tile(d.digit + c, d.modifier));
			}

			digits.length = 0;
		} else if ("-=".includes(c)) {
			if (digits.length > 0) {
				digits[digits.length - 1].modifier = c;
			}
		} else if (c === "_") {
			tiles.push(new Tile("8z", null));
		}
	}

	return tiles;
}
