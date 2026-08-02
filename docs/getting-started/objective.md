# Objective

The objective of riichi mahjong is to finish the game with the most points.

Players start the game with equal starting points (e.g., 25,000). Winning a hand is the primary way to earn points, and it is why it is important to be the first player to form a valid winning hand.

## Requirements to win

In order to win, there are two requirements:
- A hand must be "complete", the most common being 4 **melds** and a **pair**
- A hand must have a **yaku**.

> [!NOTE]
> There are 3 ways to complete a hand:
>   - 4 **melds** and a **pair**
>   - 7 **pairs**
>   - 13 **orphans**

## Tenpai

A hand is in **tenpai** if it is one tile away to complete. We assume "4 melds and a pair" for the examples below.

Consider the following **tenpai** hand.

```mj
345789p4s111z222z
```

This hand is waiting on `mj 4s` to complete the missing pair.

Let's look at another hand.

```mj
222m111p678s3366z
```

This hand is also in **tenpai** because it already has 3 melds and a pair. It is waiting on `mj 3z` or `mj 6z` to complete the last meld.

## Yaku

A yaku is a specific pattern or condition in a winning hand.

The following are some examples of yaku.

##### All simples (tanyao)

Tanyao is a yaku for a hand with only number tiles numbered 2 to 8.

```mj
666m34588p234567s
```

##### Pure straight (ittsuu)

Ittsuu is a yaku for a hand with sequences 123, 456 and 789 of the same suit.

```mj
234p123456789s66z
```

##### Full flush (chinitsu)

Chinitsu is a yaku for a hand with only one number tile suit.

```mj
11222456678999p
```

## Declaring a win

If your hand is in **tenpai** and it has a **yaku** upon winning, you may declare a win.

> [!WARNING]
> In real life play, declaring a false win incurs a heavy penalty! TODO: insert chombo page

### Tsumo

You can call **tsumo** to declare a win after drawing your winning tile.

```mj
567m3368p456s888s _ 7p
```

The hand above wins after drawing `mj 7p` to complete the last sequence. The win is valid because it fulfills the requirements. The hand is complete (4 melds and a pair) and the hand has a yaku (all simples).

### Ron

You can call **ron** to declare a win on another player's discarded tile.

> [!WARNING]
> You may not call **ron** if you are in furiten. TODO: insert furiten page

## End of hand

A hand ends when a player wins or a draw occurs. Points may be exchanged at the end of a hand.

### Win

Upon winning, the value in your hand is determined by combining all the yaku in your hand. The higher the value, the higher the points.

If you win by **tsumo**, everyone else splits the cost and pays their share.

If you win by **ron**, the person who discarded the tile pays the full amount.

> [!NOTE]
> Scoring is a rather complicated topic. TODO: insert scoring page

### Exhaustive draw

Exhaustive draw occurs when there are no more tiles to draw.

Players may declare **tenpai** and reveal their **tenpai** hands. Players may also declare **noten** (no tenpai) without revealing their hands.

Players who declared **tenpai** receive payments from players who declared **noten**.

> [!NOTE]
> TODO: insert ryuukyoku page

### Abortive draw

In certain rulesets, abortive draws may occur under certain conditions.
