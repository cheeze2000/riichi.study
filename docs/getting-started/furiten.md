# Furiten

When you are in **tenpai**, you can accidentally enter the state of **furiten**.
While in **furiten**, you cannot declare **ron** to win.

However, winning by **tsumo** is still possible.

## Furiten from discards

If you discarded a tile that could complete your **tenpai** hand, you automatically enter the state of **furiten**.

For example, suppose you are going for all simples.

Your discard pile looks like this:

```mj
43z1s9m9p3m
```

Your hand looks like this:

```mj
23477m78p555s _ 5-46p
```

You are now in **furiten** because `mj 9p` could complete your hand but it is a tile you have discarded.

This also means that you cannot **ron** someone's `mj 6p` to win.

> [!NOTE]
> This is also why melds formed by calls have the discarded tile positioned correctly.
> It permanently tracks every player's discarded tiles even if they are called.

## Temporary furiten

You may also temporarily be in **furiten** if someone discards a tile that completes your **tenpai** hand, and you did not **ron** it.

Using a slightly different example, suppose your discard pile looks like this:

```mj
43z1s9m4m3m
```

Your hand looks like this:

```mj
23477m78p555s _ 5-46p
```

If someone discards `mj 9p`, clearly you cannot call **ron** because you have no **yaku**.
This puts you in the state of **furiten** temporarily.

Temporary **furiten** lasts until you discard your next tile.

## Permanent furiten

Being in **furiten** after declaring **riichi** causes permanent **furiten**.

## Defensive play

**Furiten** is a very powerful defensive tool.
Since players cannot call **ron** while in **furiten**, tiles that they have discarded are safe against them.

This is very useful if you are defending yourself, say, against someone's riichi.
You could discard tiles that are in their discard pile. They cannot possibly **ron** you due to the **furiten** rule.
